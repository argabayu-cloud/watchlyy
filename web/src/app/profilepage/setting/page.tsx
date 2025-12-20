export default function SettingPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Pengaturan</h1>
        <p className="text-sm text-gray-500">
          Kelola preferensi dan pengaturan akun kamu
        </p>
      </div>

      {/* Akun */}
      <div className="rounded-xl border p-5 space-y-4">
        <h2 className="text-lg font-semibold">Akun</h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Nama Pengguna</p>
            <p className="text-sm text-gray-500">Dani Suhandi</p>
          </div>
          <button className="text-sm text-blue-600 hover:underline">
            Ubah
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Email</p>
            <p className="text-sm text-gray-500">email@gmail.com</p>
          </div>
          <button className="text-sm text-blue-600 hover:underline">
            Ubah
          </button>
        </div>
      </div>

      {/* Preferensi */}
      <div className="rounded-xl border p-5 space-y-4">
        <h2 className="text-lg font-semibold">Preferensi</h2>

        <div className="flex items-center justify-between">
          <p className="font-medium">Mode Gelap</p>
          <input type="checkbox" className="h-4 w-4" />
        </div>

        <div className="flex items-center justify-between">
          <p className="font-medium">Notifikasi Email</p>
          <input type="checkbox" className="h-4 w-4" defaultChecked />
        </div>
      </div>

      {/* Keamanan */}
      <div className="rounded-xl border p-5 space-y-4">
        <h2 className="text-lg font-semibold">Keamanan</h2>

        <button className="w-full rounded-lg border px-4 py-2 text-left hover:bg-gray-50">
          Ganti Password
        </button>

        <button className="w-full rounded-lg border px-4 py-2 text-left text-red-600 hover:bg-red-50">
          Logout
        </button>
      </div>
    </div>
  );
}
