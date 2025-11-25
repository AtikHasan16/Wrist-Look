import { getAllWatches } from "@/lib/getAllWatches";
import WatchesClient from "@/components/WatchesClient";
import React from "react";

export const metadata = {
  title: "All Watches | WristLook",
  description: "Browse our complete collection of premium watches",
};

const WatchesPage = async () => {
  const watches = await getAllWatches();

  return <WatchesClient watches={watches} />;
};

export default WatchesPage;
