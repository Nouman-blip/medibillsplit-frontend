
import { Button } from "@/components/ui/button"
import { useGoogleLogin } from "@react-oauth/google"
import { FcGoogle } from "react-icons/fc"

interface GoogleSignInButtonProps {
  onSuccess: (credentialResponse: any) => void
  onError: () => void
  text: string
}

export function GoogleSignInButton({ onSuccess, onError, text }: GoogleSignInButtonProps) {
  const login = useGoogleLogin({
    onSuccess: (credentialResponse: any) => onSuccess(credentialResponse),
    onError: () => onError(),
  })

  return (
    <Button
      variant="outline"
      onClick={() => login()}
      className="w-full bg-white text-medibill-card hover:bg-gray-100 transition-all duration-200"
    >
      <FcGoogle className="mr-2 h-5 w-5" />
      {text}
    </Button>
  )
}

