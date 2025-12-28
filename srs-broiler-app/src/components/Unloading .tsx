import { useState } from "react";
import { saveUnloading } from "../utils/unloading";
import { auth } from "../firebase";

export default function Unloading() {
  const [name, setName] = useState("");
  const [empty, setEmpty] = useState(0);
  const [load, setLoad] = useState(0);

  const net = load - empty;

  const save = async () => {
    if (!auth.currentUser) return;
    await saveUnloading(name, empty, load, net, "customer", auth.currentUser.uid);
    alert("Saved");
  };

  return (
    <div>
      <h3>Unloading Entry</h3>
      <input placeholder="Customer / Stock Name"
             onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="Empty"
             onChange={e => setEmpty(+e.target.value)} />
      <input type="number" placeholder="Load"
             onChange={e => setLoad(+e.target.value)} />
      <p>Net: {net}</p>
      <button onClick={save}>Save</button>
    </div>
  );
}
