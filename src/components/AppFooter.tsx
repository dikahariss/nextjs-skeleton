import React from "react";
import { APP_CONFIG } from "@/lib/constants";
import { AppFooterProps } from "@/lib/types";

export function AppFooter({
  author = APP_CONFIG.author,
  year = new Date().getFullYear(),
  poweredBy = ["Next.js", "Clerk"],
  className = "",
  showCopyright = true,
}: AppFooterProps) {
  const poweredByText = poweredBy.length > 0 ? `Powered by ${poweredBy.join(" & ")}.` : "";

  return (
    <footer
      className={`w-full text-center py-6 text-gray-400 text-sm border-t border-gray-100 ${className}`}
    >
      {showCopyright && (
        <>
          &copy; {year} {author}.{" "}
        </>
      )}
      {poweredByText}
    </footer>
  );
}
