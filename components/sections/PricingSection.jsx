"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  Rocket,
  Briefcase,
  Crown,
  Check,
  Server,
  FileText,
  ArrowRight,
  AlertCircle,
  RefreshCw,
  Key,
  FileCheck,
  Sparkles,
  Wallet,
  CreditCard,
  Clock,
  Banknote,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const pricingPackages = [
  {
    name: "BASIC",
    tagline: "Online & Jalan",
    description: "Cocok untuk UMKM yang baru go digital",
    icon: Rocket,
    initialCost: "Rp2.000.000 – Rp3.500.000",
    monthlyCost: "Rp100.000",
    features: [
      "Landing page / website sederhana",
      "Mobile friendly",
      "Form kontak / WhatsApp",
      "Hosting & domain (.com / .id)",
      "Maintenance ringan",
    ],
  },
  {
    name: "BUSINESS",
    tagline: "Siap Operasional",
    description: "Cocok untuk UMKM yang aktif jualan",
    icon: Briefcase,
    initialCost: "Rp4.000.000 – Rp7.000.000",
    monthlyCost: "Rp200.000",
    popular: true,
    features: [
      "Website / web app (admin + user)",
      "Database (produk / pelanggan / transaksi ringan)",
      "Login admin",
      "Backup mingguan",
      "Support teknis",
    ],
  },
  {
    name: "PRO",
    tagline: "UMKM Naik Level",
    description: "Cocok untuk UMKM serius & berkembang",
    icon: Crown,
    initialCost: "Rp8.000.000 – Rp15.000.000",
    monthlyCost: "Rp300.000 – Rp500.000",
    features: [
      "Sistem custom (sesuai kebutuhan)",
      "Dashboard laporan",
      "Multi-user admin",
      "Backup harian",
      "Prioritas support",
      "Minor feature update",
    ],
  },
];

const handoverSteps = [
  {
    icon: FileText,
    title: "Pengajuan Tertulis",
    description: "Klien mengajukan permintaan handover via WA/email",
  },
  {
    icon: Key,
    title: "Pembuatan Akun",
    description: "Klien membuat akun hosting / database / domain sendiri",
  },
  {
    icon: RefreshCw,
    title: "Migrasi & Deploy",
    description: "Developer melakukan migrasi data, deploy ulang, dan testing",
  },
  {
    icon: FileCheck,
    title: "Serah Terima",
    description: "Akses admin dan dokumen penggunaan diserahkan ke klien",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden">
      <Section className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
            Daftar Harga Freelance
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Paket layanan pembuatan website untuk UMKM. Pilih sesuai kebutuhan
            dan skala bisnis Anda.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pricingPackages.map((pkg, index) => {
            const Icon = pkg.icon;

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-white/10">
                      Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`p-8 h-full flex flex-col 
                  ${
                    pkg.popular
                      ? "bg-white/10 border-white/20 shadow-2xl shadow-white/5"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  {/* Package Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-2xl border ${
                        pkg.popular
                          ? "bg-white text-black border-white"
                          : "bg-white/5 border-white/10 text-white"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <span
                        className={`text-sm font-bold flex items-center gap-2 ${pkg.popular ? "text-white" : "text-gray-400"}`}
                      >
                        <Sparkles className="w-4 h-4" />
                        Paket {pkg.name}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        "{pkg.tagline}"
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{pkg.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.popular ? "text-white" : "text-gray-500"}`}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div
                    className={`p-4 rounded-xl border ${
                      pkg.popular
                        ? "bg-white/10 border-white/20"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <div className="mb-3">
                      <span className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                        <Wallet className="w-4 h-4" />
                        Biaya awal
                      </span>
                      <p className="text-lg font-bold text-white">
                        {pkg.initialCost}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                        <CreditCard className="w-4 h-4" />
                        Bulanan
                      </span>
                      <p className="text-lg font-bold text-white">
                        {pkg.monthlyCost}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Note Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 shrink-0">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Catatan Penting</h4>
                <p className="text-gray-400">
                  "Biaya bulanan mencakup server, database, backup, dan
                  perawatan agar sistem selalu aman dan berjalan."
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Handover SOP Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <FileText className="w-7 h-7 text-gray-400" />
            SOP Handover
          </h2>
          <p className="text-gray-400 mb-8">
            Prosedur serah terima akun jika klien ingin pindah ke akun sendiri
          </p>

          {/* Kapan Handover */}
          <Card className="p-6 bg-zinc-900/50 border-zinc-800 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  Kapan Handover Dilakukan
                </h4>
                <ul className="text-gray-400 space-y-1">
                  <li>• Project sudah lunas 100%</li>
                  <li>• Klien mengajukan secara tertulis (WA/email cukup)</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Proses Handover */}
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-gray-400" />
            Proses Handover
          </h3>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {handoverSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="p-6 bg-white/5 border-white/10 h-full text-center hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 mx-auto mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs text-gray-500 font-mono mb-2">
                      Step {index + 1}
                    </div>
                    <h4 className="text-white font-bold text-sm mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{step.description}</p>
                  </Card>
                  {index < handoverSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 w-6 h-6 text-gray-700" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Biaya Handover */}
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Banknote className="w-5 h-5 text-gray-400" />
                  Biaya Handover
                </h4>
                <p className="text-gray-400 text-sm">
                  Termasuk migrasi data, deploy ulang, testing, dan serah terima
                  dokumen
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">
                  Rp1.000.000 – Rp3.000.000
                </p>
                <p className="text-gray-500 text-sm">Tergantung kompleksitas</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <p className="text-gray-400 mb-6">
            Tertarik untuk memulai project bersama?
          </p>
          <Link href="/#contact">
            <Button className="h-12 px-8">
              Hubungi Saya
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </section>
  );
}
