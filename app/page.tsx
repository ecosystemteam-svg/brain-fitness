"use client";

import dynamic from "next/dynamic";

const BrainFitness = dynamic(
  () => import("../components/BrainFitness"),
  { ssr: false }
);

export default function Home() {
  return <BrainFitness />;
}
