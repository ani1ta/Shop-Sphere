import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";

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
        className="text-primary hover:text-red-500 font-semibold rounded-full px-6"
      >
        Logout
      </Button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" className="rounded-full px-6 font-medium text-gray-700 hover:text-primary hover:bg-blue-50">
             Login
           </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] p-0 overflow-hidden gap-0 bg-white border-none shadow-2xl rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[550px]">
          {/* Left Panel (Visual) */}
          <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-primary to-blue-700 p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Welcome Back</h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-xs">
                Log in to access your personalized shopping experience, wishlist, and exclusive offers.
              </p>
            </div>
            
            <div className="relative z-10">
               <div className="flex items-center gap-3 text-sm font-medium bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                 <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                 <span>Over 500+ New Arrivals Today</span>
               </div>
            </div>

            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          {/* Right Panel (Form) */}
          <div className="p-10 flex flex-col justify-center bg-white">
            <div className="text-center md:text-left mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h3>
              <p className="text-gray-500 text-sm">Enter your details to continue</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input 
                    placeholder="Email Address" 
                    className="pl-10 h-12 bg-gray-50 border-gray-200 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                 <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input 
                    type="password"
                    placeholder="Password" 
                    className="pl-10 h-12 bg-gray-50 border-gray-200 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <span className="text-sm font-medium text-primary hover:underline cursor-pointer">Forgot Password?</span>
              </div>

              <Button className="w-full bg-primary hover:bg-blue-600 text-white font-bold h-12 rounded-lg shadow-lg hover:shadow-primary/30 transition-all">
                Login <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="relative my-6 text-center text-xs text-gray-400 font-medium">
                <span className="bg-white px-3 relative z-10">OR CONTINUE WITH</span>
                <div className="absolute top-1/2 w-full border-t border-gray-100 -z-0"></div>
              </div>

              <Button 
                variant="outline" 
                className="w-full h-12 font-medium text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-black transition-all rounded-lg"
                onClick={signInWithGoogle}
              >
                <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Google
              </Button>

              <div className="mt-6 text-center text-sm text-gray-500">
                Don't have an account? <span className="text-primary font-bold cursor-pointer hover:underline">Create Account</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
