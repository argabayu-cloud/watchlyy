"use client";

import { useEffect, useState } from "react";

export default function SettingPage() {
  const [darkMode, setDarkMode] = useState(true);

  // Set dark mode sebagai default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme ? savedTheme === "dark" : true;

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);

    document.documentElement.classList.toggle("dark", newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
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
        </select>
      </div>

      {/* Notifikasi */}
      <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-5 space-y-4">
        <h2 className="text-lg font-semibold">Notifikasi</h2>

        <div className="flex items-center justify-between">
          <p className="font-medium">Notifikasi Email</p>
          <input type="checkbox" className="h-4 w-4" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <p className="font-medium">Notifikasi Aplikasi</p>
          <input type="checkbox" className="h-4 w-4" />
        </div>
      </div>

      {/* Subtitle */}
      <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-5 space-y-4">
        <h2 className="text-lg font-semibold">Subtitle</h2>

        <div className="flex items-center justify-between">
          <p className="font-medium">Aktifkan Subtitle</p>
          <input type="checkbox" className="h-4 w-4" defaultChecked />
        </div>

        <select className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm">
          <option>Bahasa Indonesia</option>
          <option>English</option>
          <option>Spanish</option>
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

          {/* Toggle */}
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
