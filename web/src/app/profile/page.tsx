"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  const [name, setName] = useState("Nama Pengguna");
  const [tempName, setTempName] = useState(name);
  const [editing, setEditing] = useState(false);

  const [imageUrl, setImageUrl] = useState("/images/profile.jpg");
  const [tempImage, setTempImage] = useState<File | null>(null);
  const [hasNewImage, setHasNewImage] = useState(false);

  // Upload foto
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setTempImage(file);
    setHasNewImage(true);

    // Preview
    const previewURL = URL.createObjectURL(file);
    setImageUrl(previewURL);
  };

  const handleSavePhoto = () => {
    if (!tempImage) return;

    console.log("Foto siap disubmit ke server:", tempImage);

    alert("Foto berhasil disimpan (contoh)");
    setHasNewImage(false);
  };

  const handleSave = () => {
    setName(tempName);
    setEditing(false);

    alert("Profil disimpan (contoh)");
  };

  const handleDelete = () => {
    if (confirm("Yakin ingin menghapus akun?")) {
      alert("Akun berhasil dihapus (contoh)");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-black border border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-xl">Profil Saya</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
        {/* FOTO PROFIL */}
        <div className="flex flex-col items-center gap-3">
        <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-600">
            <Image
            src={imageUrl}
            alt="Profile"
            width={100}
            height={100}
            className="object-cover w-full h-full"
            />
        </div>

        {/* BUTTON UPLOAD ICON */}
        <Button
            variant="outline"
            size="icon"
            aria-label="upload photo"
            className="border-gray-600 text-white hover:bg-white/10"
            onClick={() => document.getElementById("uploadFoto")?.click()}
        >
            <ArrowUpIcon className="h-4 w-4" />
        </Button>

        {/* Hidden input */}
        <input
            id="uploadFoto"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
        />

        {/* TOMBOL SIMPAN FOTO */}
        {hasNewImage && (
            <Button
            className="bg-green-600 hover:bg-green-700 w-full max-w-[150px]"
            onClick={handleSavePhoto}
            >
            Simpan Foto
            </Button>
        )}
        </div>

          {/* NAMA */}
          <div>
            <label className="text-sm">Nama</label>
            {!editing ? (
              <p className="mt-1 text-lg">{name}</p>
            ) : (
              <Input
                className="mt-1 bg-gray-900 border-gray-700 text-white"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
              />
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 pt-2">
            {!editing ? (
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => setEditing(true)}
              >
                Edit Profil
              </Button>
            ) : (
              <>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleSave}
                >
                  Simpan
                </Button>

                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white/10"
                  onClick={() => {
                    setEditing(false);
                    setTempName(name);
                  }}
                >
                  Batal
                </Button>
              </>
            )}

            <Button
              variant="destructive"
              className="ml-auto"
              onClick={handleDelete}
            >
              Hapus Akun
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
