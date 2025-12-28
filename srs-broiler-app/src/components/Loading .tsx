import { useState } from "react";
import { saveLoading } from "../utils/loading";
import { auth } from "../firebase";

export default function Loading() {
  const [empty, setEmpty] = useState(0);
  const [load, setLoad] = useState(0);

  const net = load - empty;

  const save = async () => {
    if (!auth.currentUser) return;
    await saveLoading(empty, load, net, auth.currentUser.uid);
    alert("Saved");
  };

  return (
    <div>
      <h3>Loading Entry</h3>
      <input type="number" placeholder="Empty"
             onChange={e => setEmpty(+e.target.value)} />
      <input type="number" placeholder="Load"
             onChange={e => setLoad(+e.target.value)} />
      <p>Net: {net}</p>
      <button onClick={save}>Save</button>
    </div>
  );
}
