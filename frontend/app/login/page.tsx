"use client";
import { loginUser } from "@/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { user } from "@/types/types";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState<user | null>(null);
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    setError("");
    try {
      const res = await loginUser(email, password);
      if (res) {
        setUser(res);
      }
    } catch (error: any) {
      if (error.response) {
        const { data } = error.response;
        setError(data.message);
        return;
      }
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center max-w-96 mx-auto">
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="mb-4"
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="mb-4"
      />
      <Button onClick={handleLogin}>Login</Button>
      {user && (
        <div className="mt-4">
          {user.email} - {user.role}
        </div>
      )}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
  );
}
