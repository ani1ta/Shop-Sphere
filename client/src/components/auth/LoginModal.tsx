import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Mail, Lock, LogOut } from "lucide-react";
import { motion } from "framer-motion";

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
        className="text-orange-400 hover:text-orange-300 font-bold rounded-full px-6 flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="rounded-full px-6 font-bold text-gray-300 hover:text-white hover:bg-orange-400/20 transition-all bg-transparent border border-transparent hover:border-orange-400">
            Sign In
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none shadow-2xl bg-transparent">
        <DialogTitle className="sr-only">{isLogin ? "Sign In" : "Create Account"}</DialogTitle>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-xl"
        >
          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <div className="mb-8 p-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg">
              <span className="text-white text-2xl font-black">✦</span>
            </div>

            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">
              {isLogin ? "Welcome Back" : "Join PRISMA"}
            </h2>
            <p className="text-gray-400 text-center mb-8">
              {isLogin 
                ? "Sign in to your account to continue shopping" 
                : "Create your account and start exploring"}
            </p>

            <div className="w-full space-y-4">
              <div className="space-y-4">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-orange-400 transition-colors" />
                  <Input 
                    placeholder="Email Address" 
                    className="pl-12 h-12 bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus-visible:ring-1 focus-visible:ring-orange-400 focus-visible:border-orange-400 transition-all rounded-xl hover:border-gray-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-orange-400 transition-colors" />
                  <Input 
                    type="password"
                    placeholder="Password" 
                    className="pl-12 h-12 bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus-visible:ring-1 focus-visible:ring-orange-400 focus-visible:border-orange-400 transition-all rounded-xl hover:border-gray-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <span className="text-sm font-medium text-orange-400 hover:text-orange-300 cursor-pointer transition-colors">
                    Forgot Password?
                  </span>
                </div>
              )}

              <Button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black font-bold h-12 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all text-base">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>

              <div className="relative my-6 text-center text-xs text-gray-500 font-medium">
                <span className="bg-gray-950 px-3 relative z-10">OR CONTINUE WITH</span>
                <div className="absolute top-1/2 w-full border-t border-gray-800 -z-0"></div>
              </div>

              <Button 
                variant="outline" 
                className="w-full h-12 font-medium text-white border border-gray-700 bg-gray-800/30 hover:bg-gray-800/60 hover:border-gray-600 transition-all rounded-xl"
                onClick={signInWithGoogle}
              >
                <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Google
              </Button>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span 
                className="text-orange-400 font-bold cursor-pointer hover:text-orange-300 transition-colors"
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
