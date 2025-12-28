import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const getReport = async (from: string, to: string) => {
  const loadQ = query(
    collection(db, "loading_entries"),
    where("date", ">=", from),
    where("date", "<=", to)
  );
  const unloadQ = query(
    collection(db, "unloading_entries"),
    where("date", ">=", from),
    where("date", "<=", to)
  );

  const l = await getDocs(loadQ);
  const u = await getDocs(unloadQ);

  const totalLoad = l.docs.reduce((s, d) => s + d.data().net, 0);
  const totalUnload = u.docs.reduce((s, d) => s + d.data().net, 0);

  return {
    totalLoad,
    totalUnload,
    shrinkage: totalLoad - totalUnload
  };
};
