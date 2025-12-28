import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const saveUnloading = (
  name: string, empty: number, load: number, net: number,
  type: "customer" | "stock", uid: string
) =>
  addDoc(collection(db, "unloading_entries"), {
    name, empty, load, net, type, uid,
    date: new Date().toISOString().split("T")[0]
  });
