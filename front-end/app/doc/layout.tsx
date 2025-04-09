"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import PageIllustration from "@/components/page-illustration";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []); 

  return (
    <>
      <Header showSidebar={true}/>

      <main className="grow">
        <section className="relative">
          <PageIllustration />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
            <div className="pb-12 pt-32 md:pb-20 md:pt-40">
             
              <div
                className="pb-12 text-center md:pb-16"
                data-aos="zoom-y-out"
              >
                <div className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                  
                </div>
              </div>
              {children}
            </div>
          </div>
        </section>
      </main>

      <Footer border={true} />
    </>
  );
}
