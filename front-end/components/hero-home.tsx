import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/ayam-bakar.jpg";
import Avatar02 from "@/public/images/daging.jpg";
import Avatar03 from "@/public/images/nasi-bakar.jpg";
import Avatar04 from "@/public/images/nasi-goreng.jpg";
import Avatar05 from "@/public/images/nasi-kuning.jpg";
import Avatar06 from "@/public/images/nasi-uduk.jpg";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Konten Hero */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Header Section */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image className="box-content rounded-full border-2 border-gray-50" src={Avatar01} width={42} height={52} alt="Avatar 01" />
                <Image className="box-content rounded-full border-2 border-gray-50" src={Avatar02} width={42} height={42} alt="Avatar 02" />
                <Image className="box-content rounded-full border-2 border-gray-50" src={Avatar03} width={42} height={42} alt="Avatar 03" />
                <Image className="box-content rounded-full border-2 border-gray-50" src={Avatar04} width={42} height={42} alt="Avatar 04" />
                <Image className="box-content rounded-full border-2 border-gray-50" src={Avatar05} width={42} height={42} alt="Avatar 05" />
                <Image className="box-content rounded-full border-2 border-gray-50" src={Avatar06} width={42} height={42} alt="Avatar 06" />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Platform Resep Makanan Indonesia <br className="max-lg:hidden" />
              Berbasis API
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Temukan, kelola, dan integrasikan berbagai resep makanan khas
                Indonesia dengan mudah melalui layanan API kami yang modern dan fleksibel.
              </p>
              <div className="p-2 relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <Link
                    className="btn group mb-4 w-full bg-gradient-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/doc"
                  >
                    <span className="relative inline-flex items-center">
                      Mulai Sekarang{" "}
                      <span className="ml-1 tracking-normal text-red-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                  <span className="my-auto ml-4 text-gray-500">
                    atau
                  </span>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto opacity-60"
                    href="#0"
                  >
                    Langsung Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  rasalokal.id
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  GET /api/resep
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  200 OK
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  Resep ditemukan.
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Sambal Balado, Rendang, Sate Ayam...
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  POST /api/resep
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Resep berhasil ditambahkan.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
