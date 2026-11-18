"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useState, useEffect } from "react";
import { getPartnerLogos } from "@/lib/firebase/services";

export default function Partners() {
  const verifiedFirms = [
    {
      name: "Alpha Capital",
      logo: "/__l5e/assets-v1/3be0eac6-f912-4f3f-8c5f-dca706baa846/alpha-capital.png",
      shape: "rounded-md",
      size: "medium",
    },
    {
      name: "CK Capital",
      logo: "/__l5e/assets-v1/1e2593a9-b654-49cd-b941-db887cf9bdd0/ck-capital.avif",
      shape: "rounded-md",
      size: "medium",
    },
    {
      name: "GTF",
      logo: "/__l5e/assets-v1/f693b330-1d08-46fd-b44f-ac6edd54b600/original-8085568664727708697.svg",
      shape: "rounded-md",
      size: "medium",
    },
    {
      name: "NYS Capital",
      logo: "/__l5e/assets-v1/c8946dc8-e303-4a19-9a42-c963eebf2137/nys.webp",
      shape: "rounded-md",
      size: "medium",
    },
    {
      name: "Pipstone",
      logo: "/__l5e/assets-v1/dab879e1-7b50-450f-bf3c-8fd8ab733587/original-3161896171727518706.png",
      shape: "rounded-md",
      size: "medium",
    },
    {
      name: "Shark Funded",
      logo: "/__l5e/assets-v1/e810df0d-3973-4278-81f0-0e34b2d58323/original-172386154338779018.webp",
      shape: "rounded-md",
      size: "medium",
    },
    {
      name: "Sure Leverage Funding",
      logo: "/__l5e/assets-v1/e1caa153-ade1-4ea5-bd52-51f7508207bd/original-5820029910102554696.jpg",
      shape: "rounded-md",
      size: "medium",
    },
  ];

  const [partners, setPartners] = useState<any[]>(verifiedFirms);
  const [sectionTitle, setSectionTitle] = useState("Verified Firms");

  useEffect(() => {
    async function loadPartners() {
      try {
        const data = await getPartnerLogos();
        if (data && data.length > 0) {
          const mapped = data.map((item) => ({
            name: item.name,
            logo: item.logo || item.logo_url || "/__l5e/assets-v1/c8946dc8-e303-4a19-9a42-c963eebf2137/nys.webp",
            shape: item.shape || "rounded-md",
            size: item.size || "medium",
          }));
          setPartners(mapped);
        } else {
          setPartners(verifiedFirms);
        }
      } catch (err) {
        console.error("Failed to load partner logos:", err);
        setPartners(verifiedFirms);
      }
    }
    loadPartners();
  }, []);

  const getShapeClass = (shape?: string) => {
    if (shape === "square" || shape === "rounded-none") return "rounded-none";
    if (shape === "rounded-lg") return "rounded-lg";
    return "rounded-md"; // default slightly rounded edges
  };

  const getSizeClass = (size?: string) => {
    if (size === "small") return "h-7 sm:h-8 max-w-[90px]";
    if (size === "large") return "h-10 sm:h-12 max-w-[130px]";
    return "h-8 sm:h-10 max-w-[110px]";
  };

  return (
    <section className="max-w-6xl w-full mx-auto px-4 pt-16 pb-8 sm:pt-20 sm:pb-10 gap-10 md:px-8 flex flex-col justify-center items-center text-center bg-transparent">
      <motion.div
        initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          {sectionTitle}
        </h2>
      </motion.div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 sm:gap-8 place-items-center items-center justify-center">
        <TooltipProvider>
          {partners.map((firm, index) => (
            <Tooltip key={firm.name + index}>
              <TooltipTrigger asChild>
                <div className="shrink-0 p-1.5 flex items-center justify-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                      type: "spring",
                      bounce: 0,
                    }}
                    className={`flex items-center justify-center overflow-hidden ${getShapeClass(
                      firm.shape
                    )}`}
                  >
                    <img
                      src={firm.logo}
                      alt={`${firm.name} logo`}
                      loading="lazy"
                      className={`w-auto object-contain transition-transform duration-200 hover:scale-105 ${getSizeClass(
                        firm.size
                      )} ${getShapeClass(firm.shape)}`}
                    />
                  </motion.div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="font-semibold text-xs bg-card border border-border text-foreground">
                {firm.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </section>
  );
}
