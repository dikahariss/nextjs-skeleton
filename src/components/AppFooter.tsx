import React from "react";

export function AppFooter() {
  return (
    <footer className="w-full text-center py-6 text-gray-400 text-sm border-t border-gray-100">
      &copy; {new Date().getFullYear()} Dika Haris Abdurahman. Powered by Next.js & Clerk.
    </footer>
  );
}
