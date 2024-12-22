import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { firebaseAuth } from "@/services/firebase/firebase";

export async function signInWithGoogle(): Promise<UserCredential> {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(firebaseAuth, provider);
    return result;
  } catch (error) {
    console.error("Google Sign-In error:", error);
    throw error;
  }
}

export async function signOut() {
  try {
    await firebaseAuth.signOut();
    console.log("Signed out successfully");
  } catch (error) {
    console.error("Sign-out error:", error);
  }
}
