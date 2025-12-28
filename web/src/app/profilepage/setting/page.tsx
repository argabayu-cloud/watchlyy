"use client";

import { useEffect, useState } from "react";

export default function SettingPage() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Pengaturan</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Atur preferensi tampilan dan pengalaman menonton
        </p>
      </div>

      {/* Bahasa */}
      <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-5 space-y-4">
        <h2 className="text-lg font-semibold">Bahasa</h2>

        <select className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm">
          <option>Bahasa Indonesia</option>
          <option>English</option>
          <option>日本語</option>
          <option>한국어</option>
          <option>中文（简体）</option>
          <option>中文（繁體）</option>
          <option>العربية</option>
        </select>
      </div>

      {/* Notifikasi */}
      <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-5 space-y-4">
        <h2 className="text-lg font-semibold">Notifikasi</h2>

        <div className="flex items-center justify-between">
          <p className="font-medium">Notifikasi Email</p>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <p className="font-medium">Notifikasi Aplikasi</p>
          <input type="checkbox" />
        </div>
      </div>

      {/* Subtitle */}
      <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-5 space-y-4">
        <h2 className="text-lg font-semibold">Subtitle</h2>

        <div className="flex items-center justify-between">
          <p className="font-medium">Aktifkan Subtitle</p>
          <input type="checkbox" defaultChecked />
        </div>

        <select className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm">
          <option>Bahasa Indonesia</option>
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
        </select>
      </div>

      {/* Kualitas Video */}
      <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-5 space-y-4">
        <h2 className="text-lg font-semibold">Kualitas Video</h2>

        <select className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm">
          <option>Auto</option>
          <option>360p</option>
          <option>480p</option>
          <option>720p (HD)</option>
          <option>1080p (Full HD)</option>
        </select>
      </div>

      {/* Mode Tampilan */}
      <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-5 space-y-4">
        <h2 className="text-lg font-semibold">Mode Tampilan</h2>

        <div className="flex items-center justify-between">
          <p className="font-medium">Mode Gelap</p>

          <button
            onClick={toggleDarkMode}
            className={`w-12 h-6 rounded-full transition ${
              darkMode ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`block h-5 w-5 bg-white rounded-full translate-y-0.5 transition ${
                darkMode ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
