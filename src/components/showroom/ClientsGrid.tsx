"use client";

import { AnimatePresence, motion } from "framer-motion";

import type { ShowroomClient } from "@/data/showroomTypes";
import ClientCard from "./ClientCard";

type ClientsGridProps = {
  readonly clients: readonly ShowroomClient[];
  readonly columns: "wide" | "compact";
};

const COLUMN_CLASSES = {
  wide: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  compact: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
} as const;

export default function ClientsGrid({ clients, columns }: ClientsGridProps) {
  return (
    <motion.div layout className={COLUMN_CLASSES[columns]}>
      <AnimatePresence mode="popLayout">
        {clients.map((client, index) => (
          <ClientCard key={client.slug} client={client} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
