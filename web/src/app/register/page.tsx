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

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Semua field wajib diisi.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak sama.");
      return;
    }

    if (password.length < 6) {
      alert("Password minimal 6 karakter.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registrasi gagal");
        setLoading(false);
        return;
      }

      alert("Registrasi berhasil. Silakan login.");
      router.push("/login");
    } catch (error) {
      console.error("Register error:", error);
      alert("Terjadi kesalahan saat registrasi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-6">
      <Card className="w-full max-w-sm bg-black text-white border border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl">Daftar</CardTitle>
          <CardDescription className="text-gray-400">
            Buat akun baru untuk melanjutkan
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-sm">Nama Lengkap</label>
              <Input
                type="text"
                placeholder="Nama lengkap"
                className="mt-1 bg-gray-900 border-gray-700 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
                placeholder="Minimal 6 karakter"
                className="mt-1 bg-gray-900 border-gray-700 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm">Konfirmasi Password</label>
              <Input
                type="password"
                placeholder="Ulangi password"
                className="mt-1 bg-gray-900 border-gray-700 text-white"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
              disabled={loading}
            >
              {loading ? "Mendaftar..." : "Daftar"}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="text-sm text-gray-400">
            Sudah punya akun?{" "}
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
