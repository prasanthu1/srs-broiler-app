import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getUserRole = async (uid: string) => {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.data()?.role || "DRIVER";
};
