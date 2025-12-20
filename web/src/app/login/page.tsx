"use client";

import { useState } from "react";
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
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = (e: React.FormEvent) => {
e.preventDefault();


// contoh validasi sederhana
if (!email || !password) {
  alert("Email dan password tidak boleh kosong.");
  return;
}

// ganti ini nanti pakai API login kamu
console.log("Login:", { email, password });
alert("Login berhasil (contoh)");


};

return ( <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-6"> <Card className="w-full max-w-sm bg-black text-white border border-gray-700"> <CardHeader> <CardTitle className="text-2xl">Login</CardTitle> <CardDescription className="text-gray-400">
Masukkan email dan password kamu </CardDescription> </CardHeader>

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
        ><Link href="/film">
          Login
          </Link>
        </Button>
      </form>
    </CardContent>

    <CardFooter>
      <p className="text-sm text-gray-400">
        Belum punya akun? <Link href="/register"><span className="text-red-500">Daftar</span></Link>
      </p>
    </CardFooter>
  </Card>
</div>


);
}
