import { useState } from "react";
import { getReport } from "../utils/report";

export default function Report() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [data, setData] = useState<any>(null);

  const fetch = async () => {
    const r = await getReport(from, to);
    setData(r);
  };

  return (
    <div>
      <h3>Shrinkage Report</h3>
      <input type="date" onChange={e => setFrom(e.target.value)} />
      <input type="date" onChange={e => setTo(e.target.value)} />
      <button onClick={fetch}>Get Report</button>

      {data && (
        <div>
          <p>Total Loading: {data.totalLoad}</p>
          <p>Total Unloading: {data.totalUnload}</p>
          <b>Shrinkage: {data.shrinkage}</b>
        </div>
      )}
    </div>
  );
}
