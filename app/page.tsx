"use client";

import logo from "@/assets/img/logo.png";
import ActionBtn from "@/components/action";
import {
  ChevronDown,
  ChevronUp,
  ChevronsDown,
  ChevronsUp,
  Github,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  // * Remove Hydration Error
  const [nameIndex, setNameIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  if (!isMounted) {
    return null;
  }
  // * ----------------------

  const names = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"];
  const iconData = [
    {
      icon: <ChevronsUp />,
      onClick: () => setNameIndex(0),
      disabled: nameIndex === 0,
    },
    {
      icon: <ChevronUp />,
      onClick: () => setNameIndex((val) => val - 1),
      disabled: nameIndex === 0,
    },
    {
      icon: <ChevronDown />,
      onClick: () => setNameIndex((val) => val + 1),
      disabled: nameIndex === names.length - 1,
    },
    {
      icon: <ChevronsDown />,
      onClick: () => setNameIndex(names.length - 1),
      disabled: nameIndex === names.length - 1,
    },
  ];

  return (
    <div className="w-screen h-screen">
      <header className="fixed top-0 w-screen rounded-3xl h-16 p-4 flex items-center justify-between">
        <Image src={logo} alt="logo" className="h-8 w-auto" />
{/*         <Button size="icon" asChild>
          <Link href={'https://github.com/hc-huxai'} target="_blank">
            <Github/>
          </Link>
        </Button> */}
      </header>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden h-16 flex items-center relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ translateY: `-${nameIndex * 4 + 0.25}rem`, scale: 1 }}
            transition={{ ease: "easeInOut", type: "spring", stiffness: "80" }}
            className="w-64 h-16 flex flex-col gap-1"
          >
            {names.map((name, index) => (
              <div key={index} className="w-64 h-16">
                <span className="text-6xl block font-bold text-center w-64 h-16 select-none">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0, left: "50%", translateX: "-50%" }}
        animate={{ scale: 1, left: "50%", translateX: "-50%" }}
        transition={{ ease: "easeInOut", type: "spring" }}
        className="flex fixed bottom-4 gap-2"
      >
        {iconData.map((data, index) => (
          <ActionBtn
            key={index}
            icon={data.icon}
            onClick={data.onClick}
            disabled={data.disabled}
          />
        ))}
      </motion.div>
    </div>
  );
}
