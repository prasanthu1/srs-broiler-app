export default function Dashboard({ role, setPage }: any) {
  return (
    <div>
      <h2>Dashboard ({role})</h2>

      <button onClick={() => setPage("loading")}>Loading</button>
      <button onClick={() => setPage("unloading")}>Unloading</button>

      {role === "ADMIN" && (
        <button onClick={() => setPage("report")}>Reports</button>
      )}
    </div>
  );
}
