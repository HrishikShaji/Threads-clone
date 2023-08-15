import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-neutral-900`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
