"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface Profile {
  username: string;
  photo: string;
}

interface ProfileContextType {
  profile: Profile | null;
  fetchProfile: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);

  const fetchProfile = async (): Promise<void> => {
    const res = await fetch("/api/profile");
    const data: Profile = await res.json();
    setProfile(data);
  };

  useEffect(() => {
    let mounted = true;

    const loadProfile = async () => {
      const res = await fetch("/api/profile");
      const data: Profile = await res.json();
      if (mounted) {
        setProfile(data);
      }
    };

    loadProfile();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, fetchProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile(): ProfileContextType {
  const ctx = useContext(ProfileContext);
  if (!ctx) {
    throw new Error("useProfile must be used inside ProfileProvider");
  }
  return ctx;
}