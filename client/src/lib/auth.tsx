import { createContext, useContext, useEffect, useState } from "react";
import { 
  User, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "./firebase";
import { useToast } from "@/hooks/use-toast";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast({
        title: "Welcome back!",
        description: "Successfully signed in with Google",
      });
    } catch (error: any) {
      console.error(error);
      
      // Handle mock mode for demo purposes if no config
      if (error.code === 'auth/api-key-not-valid-please-pass-a-valid-api-key' || error.code === 'auth/configuration-not-found') {
        toast({
          title: "Demo Mode",
          description: "Firebase not configured. Please add VITE_FIREBASE_API_KEY to Secrets.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      toast({
        title: "Signed out",
        description: "See you soon!",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
