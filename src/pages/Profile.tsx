import { Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="max-w-md mx-auto text-center py-20">
      {/* Ghost Icon */}
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center">
        <Ghost className="h-10 w-10 text-muted-foreground" />
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-2">Who are you?</h1>
      <p className="text-muted-foreground mb-8">You're not logged in</p>

      <div className="flex items-center justify-center gap-4">
        <Button className="px-8">Sign Up</Button>
        <Button variant="outline" className="px-8">Log In</Button>
      </div>

      {/* Powered by */}
      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <span className="text-[10px] text-primary-foreground font-bold">A</span>
        </div>
        <span>Powered by FramerAuth</span>
      </div>
    </div>
  );
}
