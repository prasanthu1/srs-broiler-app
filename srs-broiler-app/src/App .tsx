import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Loading from "./components/Loading";
import Unloading from "./components/Unloading";
import Report from "./components/Report";

export default function App() {
  const [role, setRole] = useState<string | null>(null);
  const [page, setPage] = useState("dashboard");

  if (!role) return <Login onLogin={setRole} />;

  if (page === "loading") return <Loading />;
  if (page === "unloading") return <Unloading />;
  if (page === "report") return <Report />;

  return <Dashboard role={role} setPage={setPage} />;
}
