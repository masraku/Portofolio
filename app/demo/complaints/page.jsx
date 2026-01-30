import { prisma } from "@/lib/prisma";
import {
  Search,
  MapPin,
  Camera,
  AlertCircle,
  ChevronDown,
  CheckCircle2,
  Info,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default async function ComplaintsDemo() {
  const complaints = await prisma.complaint.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-32 md:pb-20 relative overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-100/50 to-transparent -z-10" />
      <div className="fixed -top-40 right-0 w-[600px] h-[600px] bg-yellow-200/30 rounded-full blur-[120px] -z-10" />
      <div className="fixed -top-40 right-0 w-[600px] h-[600px] bg-yellow-200/30 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 left-0 w-full h-80 bg-gradient-to-t from-blue-900/5 to-transparent -z-10" />

      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-slate-900 z-[200] flex items-center px-6 border-b border-slate-800 shadow-lg">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-100 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Info Overlay / Preview Banner */}
      <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:bottom-10 z-[100] max-w-md w-full animate-fade-in-up">
        <div className="bg-white/90 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl shadow-black/10 flex flex-col gap-4 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />

          <div className="flex items-start gap-3">
            <div className="p-2 bg-red-100 rounded-lg text-red-500 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">
                Report Portal Clone
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-1">
                This is a UI clone of the <b>Jakarta Pasti Happy</b> portal. The
                live project enables real-time issue reporting and tracking for
                citizens.
              </p>
            </div>
          </div>

          <a
            href="https://web-pengaduan.vercel.app/user"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Visit Live Project <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-16 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-red-500/20">
              J
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg text-slate-900">JAKARTA</span>
              <span className="text-xs font-medium text-slate-500 tracking-wider">
                PASTI HAPPY
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#" className="text-red-500">
              Beranda
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Tentang
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Statistik
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Panduan
            </a>
          </div>

          <button className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg shadow-red-500/20 transition-all hover:scale-105">
            Masuk
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-6 leading-tight">
            Layanan Aspirasi dan Pengaduan Online Rakyat
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10">
            Sampaikan laporan Anda langsung kepada instansi pemerintah
            berwenang. Mudah, Terpadu, dan Tuntas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all hover:-translate-y-1 border border-transparent hover:border-red-100 text-left">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500 group-hover:w-full transition-all duration-300 opacity-10" />
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Buat Laporan
              </h3>
              <p className="text-slate-500">
                Laporkan keluhan atau aspirasi Anda untuk perbaikan kota.
              </p>
            </button>

            <button className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all hover:-translate-y-1 border border-transparent hover:border-yellow-100 text-left">
              <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400 group-hover:w-full transition-all duration-300 opacity-10" />
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Cari Laporan
              </h3>
              <p className="text-slate-500">
                Pantau status tindak lanjut laporan yang telah dikirim.
              </p>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
              <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="font-bold text-xl flex items-center gap-2">
                  <span className="w-2 h-6 bg-red-500 rounded-full" />
                  Formulir Laporan
                </h2>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Title */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Judul Laporan
                  </label>
                  <input
                    type="text"
                    placeholder="Ketikan judul laporan Anda..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Isi Laporan
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Ceritakan detail permasalahan..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Location & Date Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Lokasi Kejadian
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Pilih lokasi..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Kategori
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all appearance-none cursor-pointer text-slate-600">
                        <option>Infrastruktur</option>
                        <option>Pelayanan Publik</option>
                        <option>Kesehatan</option>
                        <option>Lingkungan Hidup</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Upload Section */}
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                    <Camera className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-700 mb-1">
                    Unggah Lampiran
                  </h4>
                  <p className="text-sm text-slate-400">
                    Drag & drop foto bukti kejadian di sini
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-xl shadow-red-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Kirim Laporan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Recent Reports */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 p-6 border border-slate-100">
              <h3 className="font-bold text-lg mb-6">Laporan Terkini</h3>
              <div className="space-y-6">
                {complaints.slice(0, 3).map((c) => (
                  <div key={c.id} className="group cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm group-hover:text-red-500 transition-colors line-clamp-2 mb-1">
                          {c.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {c.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-700">
                            {c.status}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            • 2 Jam yang lalu
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-slate-100 mt-4 group-last:hidden" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl shadow-blue-500/30 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <h3 className="font-bold text-xl mb-2 relative z-10">
                Lacak Laporan
              </h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">
                Masukan nomor tiket pelaporan Anda untuk mengetahui status
                tindak lanjut.
              </p>
              <div className="flex bg-white/10 backdrop-blur rounded-xl p-1 relative z-10 border border-white/20">
                <input
                  type="text"
                  placeholder="# Tiket"
                  className="w-full bg-transparent px-4 py-2 outline-none text-white placeholder:text-blue-200 font-mono"
                />
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
