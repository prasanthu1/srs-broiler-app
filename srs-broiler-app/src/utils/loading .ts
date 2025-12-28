import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const saveLoading = (empty: number, load: number, net: number, uid: string) =>
  addDoc(collection(db, "loading_entries"), {
    empty, load, net, uid,
    date: new Date().toISOString().split("T")[0]
  });
