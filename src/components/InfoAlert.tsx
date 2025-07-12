import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoAlertProps } from "@/lib/types";
import { SHADOWS } from "@/lib/styles";

export function InfoAlert({ title, description, className, variant = "default" }: InfoAlertProps) {
  return (
    <div className="px-4 sm:px-6 pb-8">
      <Alert
        className={`w-full max-w-lg mx-auto ${SHADOWS.alert} ${className || ""}`}
        variant={variant}
      >
        <AlertTitle className="text-base font-semibold">{title}</AlertTitle>
        <AlertDescription
          className="text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Alert>
    </div>
  );
}
