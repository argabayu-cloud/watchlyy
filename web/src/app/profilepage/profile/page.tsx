"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  const [username, setUsername] = useState("Current Username");
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    setUsername(newUsername);
    setEditing(false);
    // TODO: Save to server
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Profil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Foto Profil</label>
            <div className="flex items-center space-x-4">
              <Image
                src={profilePhoto || "/images/default-avatar.png"}
                alt="Profile"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover border"
                unoptimized={Boolean(profilePhoto)}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            {editing ? (
              <Input
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Masukkan username baru"
              />
            ) : (
              <p className="text-gray-700">{username}</p>
            )}
          </div>
          <div className="flex space-x-2">
            {editing ? (
              <>
                <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700">
                  Simpan
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditing(false);
                    setNewUsername(username);
                  }}
                >
                  Batal
                </Button>
              </>
            ) : (
              <Button onClick={() => setEditing(true)} className="bg-red-600 hover:bg-red-700">
                Edit Profil
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
