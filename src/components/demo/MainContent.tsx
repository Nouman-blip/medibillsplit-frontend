import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function MainContent() {
  return (
    <div className="flex-1">
      <div className="h-full px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Smith Family</h2>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Members</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {["Emma", "John", "Sarah"].map((name) => (
              <Card key={name}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">Dependence: No</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <ScrollArea className="mt-8 h-[calc(100vh-300px)]">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Bills/Split</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">No bills to display</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Sarah - Comment</p>
                      <p className="text-sm text-muted-foreground">Will pay Emma bill calculations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

