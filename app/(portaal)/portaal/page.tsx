"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PortaalPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/portaal/dashboard");
  }, [router]);

  return null; // of een kleine loader tekst
}