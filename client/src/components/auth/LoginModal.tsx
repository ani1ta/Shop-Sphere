import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Mail, Lock, Hexagon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LoginModal({ trigger }: { trigger?: React.ReactNode }) {
  const { signInWithGoogle, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

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
             Sign In
           </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none shadow-2xl bg-transparent">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 p-4 bg-white rounded-2xl shadow-lg shadow-primary/10">
              <Hexagon className="h-10 w-10 text-primary fill-primary/20 stroke-[2.5px]" />
            </div>

            <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              {isLogin ? "Welcome Back" : "Join PRISMA"}
            </h2>
            <p className="text-gray-500 text-center mb-8">
              {isLogin 
                ? "Enter your credentials to access your account" 
                : "Start your journey with us today"}
            </p>

            <div className="w-full space-y-4">
              <div className="space-y-4">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input 
                    placeholder="Email Address" 
                    className="pl-12 h-14 bg-gray-50/50 border-gray-200 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-2xl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input 
                    type="password"
                    placeholder="Password" 
                    className="pl-12 h-14 bg-gray-50/50 border-gray-200 focus-visible:ring-primary/20 focus-visible:border-primary transition-all rounded-2xl"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <span className="text-sm font-medium text-primary hover:underline cursor-pointer">
                    Forgot Password?
                  </span>
                </div>
              )}

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-2xl shadow-lg hover:shadow-primary/30 transition-all text-lg group">
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="relative my-6 text-center text-xs text-gray-400 font-medium">
                <span className="bg-white/50 px-3 relative z-10 backdrop-blur-sm">OR CONTINUE WITH</span>
                <div className="absolute top-1/2 w-full border-t border-gray-200 -z-0"></div>
              </div>

              <Button 
                variant="outline" 
                className="w-full h-14 font-medium text-gray-700 border-gray-200 hover:bg-white hover:text-black transition-all rounded-2xl bg-white/50"
                onClick={signInWithGoogle}
              >
                <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Google
              </Button>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span 
                className="text-primary font-bold cursor-pointer hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Log In"}
              </span>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
