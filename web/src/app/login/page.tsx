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
import  Link  from "next/link";

export default function LoginPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

const handleLogin = async (e: React.FormEvent) => {
e.preventDefault();

// contoh validasi sederhana
if (!email || !password) {
  alert("Email dan password tidak boleh kosong.");
  return;
}

try {
  setLoading(true);
  const response = await fetch("http://localhost:3001/app/controllers/authController.ts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      email, 
      password 
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    alert(result.message || "Login gagal.");
    return;
  }

  // Simpan token atau data user
  localStorage.setItem("token", result.data.token);
  localStorage.setItem("user", JSON.stringify(result.data.user));

  alert("Login berhasil!");
  router.push("/film/page.tsx");
} catch (error) {
  alert("Terjadi kesalahan saat login.");
  console.error("Login error:", error);
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
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          {loading ? "Memproses..." : "Login"}
        </Button>
      </form>
    </CardContent>

    <CardFooter>
      <p className="text-sm text-gray-400">
        Belum punya akun? 
        <Link href="/register">
          <span className="text-red-500">
            Daftar
          </span> 
        </Link>
      </p>
    </CardFooter>
  </Card>
</div>
);
}
