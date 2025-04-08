import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"

export const UserNav = () => (
  <div className="relative">
    <button className="relative h-8 w-8 rounded-full">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg" alt="@farmer" />
        <AvatarFallback>FM</AvatarFallback>
      </Avatar>
    </button>
  </div>
)
