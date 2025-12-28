import { useState } from "react";
import { login } from "../utils/auth";
import { getUserRole } from "../utils/userRole";

export default function Login({ onLogin }: { onLogin: (r: string) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await login(email, password);
    const role = await getUserRole(res.user.uid);
    onLogin(role);
  };

  return (
    <div>
      <h2>SRS Broiler Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
             onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
