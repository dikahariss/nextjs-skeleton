import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface MainCardProps {
  headline: string;
  description: string;
  illustration: string;
  showList?: boolean;
  listItems?: string[];
  action?: React.ReactNode;
}

export function MainCard({
  headline,
  description,
  illustration,
  showList,
  listItems,
  action,
}: MainCardProps) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <Card className="w-full max-w-lg mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-md animate-fade-in">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Image
              src={illustration}
              alt="Illustration"
              width={64}
              height={64}
              className="animate-bounce"
            />
          </div>
          <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {headline}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed">{description}</p>
          {showList && listItems && (
            <div className="mb-8">
              <ul className="space-y-3 text-left">
                {listItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="text-center">{action}</div>
        </CardContent>
      </Card>
    </main>
  );
}
