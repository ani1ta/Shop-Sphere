import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function LoginModal({ trigger }: { trigger?: React.ReactNode }) {
  const { signInWithGoogle, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return (
      <Button 
        variant="ghost" 
        onClick={() => logout()}
        className="text-primary hover:text-red-500 font-semibold"
      >
        Logout
      </Button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" className="bg-white hover:bg-primary hover:text-white text-primary border border-border px-8 rounded-sm h-8 font-semibold transition-colors">
            Login
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden gap-0">
        <div className="grid grid-cols-5 h-[500px]">
          {/* Left Panel (Blue) */}
          <div className="col-span-2 bg-primary p-6 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <p className="text-sm text-blue-100 font-medium leading-relaxed">
                Get access to your Orders, Wishlist and Recommendations
              </p>
            </div>
            <div className="w-full aspect-square relative opacity-90">
               {/* Decorative login graphic could go here */}
               <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>

          {/* Right Panel (Form) */}
          <div className="col-span-3 p-8 flex flex-col justify-center bg-white">
            <div className="space-y-4">
              <div className="space-y-2">
                <Input 
                  placeholder="Enter Email/Mobile number" 
                  className="border-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent placeholder:text-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                 <Input 
                  type="password"
                  placeholder="Enter Password" 
                  className="border-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent placeholder:text-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <p className="text-xs text-gray-500 pt-4">
                By continuing, you agree to Shopping Hub's <span className="text-primary font-medium cursor-pointer">Terms of Use</span> and <span className="text-primary font-medium cursor-pointer">Privacy Policy</span>.
              </p>

              <Button className="w-full bg-[#fb641b] hover:bg-[#e45b18] text-white font-bold h-12 rounded-sm mt-2">
                Login
              </Button>

              <div className="relative my-4 text-center text-xs text-gray-400">
                <span className="bg-white px-2 relative z-10">OR</span>
                <div className="absolute top-1/2 w-full border-t border-gray-200 -z-0"></div>
              </div>

              <Button 
                variant="outline" 
                className="w-full h-12 font-medium text-primary border-gray-200 shadow-sm hover:bg-gray-50"
                onClick={signInWithGoogle}
              >
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
              </Button>

              <div className="mt-8 text-center">
                <span className="text-primary text-sm font-medium cursor-pointer">New to Shopping Hub? Create an account</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
