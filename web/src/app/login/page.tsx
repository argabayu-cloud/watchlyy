"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email dan password tidak boleh kosong.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login gagal");
        setLoading(false);
        return;
      }

      // simpan token jika backend mengirim token
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      alert("Login berhasil");

      // redirect setelah login
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-6">
      <Card className="w-full max-w-sm bg-black text-white border border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="text-gray-400">
            Masukkan email dan password kamu
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm">Email</label>
              <Input
                type="email"
                placeholder="contoh@email.com"
                className="mt-1 bg-gray-900 border-gray-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-1 bg-gray-900 border-gray-700 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-sm text-gray-400">
            Belum punya akun?{" "}
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Daftar
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
