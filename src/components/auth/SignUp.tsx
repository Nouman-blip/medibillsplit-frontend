import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { GoogleSignInButton } from "./GoogleAuth"
import { Logo } from "./Logo"
import { signUp, googleSignIn } from "@/lib/auth"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await signUp(email, password)
    if (result.success) {
      navigate('/login')
    }
  }

  const handleGoogleSignIn = async (credentialResponse: any) => {
    const result = await googleSignIn(credentialResponse.credential)
    if (result.success) {
      navigate("/dashboard")
    }
  }

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex items-center justify-center min-h-screen bg-metext-medibill-dark">
        <div className="w-full max-w-md px-4">
          <div className="flex justify-center mb-8">
            <Logo className="h-16 w-16" />
          </div>
          <Card className="w-full backdrop-blur-sm bg-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-white">Sign Up</CardTitle>
              <CardDescription className="text-center text-gray-300">Create your MediBillSplit account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/20 text-white placeholder-white border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-white/20 text-white placeholder-white border-gray-600"
                  />
                 
                </div>
                <Button
                  className="w-full bg-white text-medibill-dark hover:bg-gray-200 transition-all duration-200"
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-medibill-dark px-2 text-gray-400">Or continue with</span>
                </div>
              </div>
              <GoogleSignInButton
                onSuccess={handleGoogleSignIn}
                onError={() => console.log("Login Failed")}
                text="Sign up with Google"
              />
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="text-white hover:underline">
                  Log in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

