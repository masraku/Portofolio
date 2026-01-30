import { prisma } from "@/lib/prisma";
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  Menu,
  Bell,
  ExternalLink,
  Info,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export const dynamic = "force-dynamic";

export default async function JobsDemo() {
  let jobs = [];
  try {
    jobs = await prisma.job.findMany({
      include: { company: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.warn("Failed to fetch jobs (likely during build):", error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 font-sans text-slate-900 pb-32 md:pb-20 relative">
      {/* Absolute background effects */}
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5 pointer-events-none" />
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-yellow-300 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-yellow-300 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-[100] px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all flex items-center gap-2 shadow-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
      </Link>

      {/* Info Overlay / Preview Banner */}
      <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:bottom-10 z-[100] max-w-md w-full animate-fade-in-up">
        <div className="bg-white/90 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl shadow-black/20 flex flex-col gap-4 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />

          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">
                Job Portal Clone
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-1">
                This is a UI clone of the <b>Kerja Simpel</b> project. The
                actual platform features full authentication, job applications,
                and recruiter dashboards.
              </p>
            </div>
          </div>

          <a
            href="https://kerjasimpel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Visit Live Project <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Navbar (Demo specific) */}
      <nav className="relative z-50 px-6 py-6 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg shadow-blue-900/10">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-xl font-bold text-blue-600">J</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                KERJA<span className="text-yellow-300">SIMPEL</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
              <Link href="#" className="hover:text-white transition-colors">
                Lowongan
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Perusahaan
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Blog
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="hidden md:block px-5 py-2.5 bg-white text-blue-600 font-bold rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Login / Daftar
              </button>
              <button className="md:hidden p-2 text-white/80 hover:text-white">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 px-6 pt-10 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-800/30 border border-blue-400/30 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-blue-100">
              🚀 Platform Pencari Kerja #1 di Indonesia
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
            Temukan Karir Impianmu <br className="hidden md:block" />
            Tanpa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Ribet
            </span>
          </h1>

          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Ribuan lowongan kerja terverifikasi dari perusahaan top menunggu
            lamaranmu. Cukup satu klik untuk melamar.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-[2rem] shadow-2xl shadow-blue-900/20 max-w-3xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-6 h-14 bg-gray-50/50 rounded-[1.5rem] focus-within:bg-white focus-within:ring-2 ring-blue-100 transition-all">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Cari posisi atau perusahaan..."
                className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 font-medium"
              />
            </div>
            <div className="flex-1 flex items-center px-6 h-14 bg-gray-50/50 rounded-[1.5rem] focus-within:bg-white focus-within:ring-2 ring-blue-100 transition-all border-l border-transparent md:border-gray-100">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Lokasi (mis: Jakarta)"
                className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 font-medium"
              />
            </div>
            <button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-white font-bold rounded-[1.5rem] transition-all flex items-center justify-center gap-2 text-lg shrink-0">
              Cari Kerja
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-4 text-sm text-blue-100/60 font-medium">
            <span>Populer:</span>
            <span className="text-white hover:underline cursor-pointer">
              Frontend Dev
            </span>
            <span className="text-white hover:underline cursor-pointer">
              Data Analyst
            </span>
            <span className="text-white hover:underline cursor-pointer">
              UI/UX
            </span>
          </div>
        </div>
      </header>

      {/* Job Listing Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            Lowongan Terbaru
            <span className="px-3 py-1 bg-white/10 text-sm font-medium rounded-full text-white/90">
              {jobs.length} Jobs
            </span>
          </h2>
          <Link
            href="#"
            className="text-white/90 hover:text-white font-medium flex items-center gap-1"
          >
            Lihat semua <span className="text-xl">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-100 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                  {job.company.name.charAt(0)}
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                  Full Time
                </span>
              </div>

              <div className="mb-6 flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">{job.company.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  {formatDistanceToNow(new Date(job.createdAt), {
                    addSuffix: true,
                  })}
                </div>
                <span className="font-bold text-blue-600">IDR 5jt - 10jt</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
