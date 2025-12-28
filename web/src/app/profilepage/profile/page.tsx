"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProfile } from "@/context/ProfileContext";

export default function ProfilePage() {
  const { profile, fetchProfile } = useProfile();

  // ✅ hooks SELALU dipanggil
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPhoto, setNewPhoto] = useState("");

  // ✅ return setelah hooks
  if (!profile) return null;

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setNewPhoto(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: newUsername,
        photo: newPhoto,
      }),
    });

    await fetchProfile();
    setEditing(false);
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Profil</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Foto Profil</label>
            <Image
              src={newPhoto}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            {editing && (
              <input type="file" accept="image/*" onChange={handlePhotoChange} />
            )}
          </div>

          <div>
            <label className="block text-sm mb-2">Username</label>
            {editing ? (
              <Input
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            ) : (
              <p>{profile.username}</p>
            )}
          </div>

          {editing ? (
            <div className="flex gap-2">
              <Button onClick={handleSave}>Simpan</Button>
              <Button
                variant="outline"
                onClick={() => {
                  setEditing(false);
                  setNewUsername(profile.username);
                  setNewPhoto(profile.photo);
                }}
              >
                Batal
              </Button>
            </div>
          ) : (
            <Button onClick={() => {
              setEditing(true);
              setNewUsername(profile.username);
              setNewPhoto(profile.photo);
            }}>Edit Profil</Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
