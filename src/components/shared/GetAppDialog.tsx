"use client";

import { useState } from "react";
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface GetAppDialogProps {
  triggerClassName?: string;
  triggerText?: string;
  asButton?: boolean;
}

export default function GetAppDialog({
  triggerClassName,
  triggerText = "Get the App",
  asButton = false,
}: GetAppDialogProps) {
  const [open, setOpen] = useState(false);

  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.jurchen.technology";
  const iosUrl = "https://apps.apple.com/app/jurchen-technology";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {asButton ? (
          <Button size="sm" className={triggerClassName}>
            <Smartphone className="h-4 w-4 mr-1.5" />
            {triggerText}
          </Button>
        ) : (
          <span className={triggerClassName}>{triggerText}</span>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg">
            Download Jurchen App
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-center text-muted-foreground mb-4">
          Choose your platform to download the Jurchen Technology app for dealer
          pricing, ordering &amp; more.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* Android */}
          <a
            href={androidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-5 border rounded-xl hover:shadow-md hover:border-green-500 transition-all group"
          >
            <div className="h-14 w-14 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
              <svg
                className="h-8 w-8 text-green-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.523 15.341a.6.6 0 0 0-.585.615v4.13a.6.6 0 0 0 1.17 0v-4.13a.6.6 0 0 0-.585-.615zm-11.046 0a.6.6 0 0 0-.585.615v4.13a.6.6 0 0 0 1.17 0v-4.13a.6.6 0 0 0-.585-.615zM14.772 5.5l1.042-1.911a.217.217 0 0 0-.086-.295.217.217 0 0 0-.295.086l-1.056 1.936A6.535 6.535 0 0 0 12 4.864a6.535 6.535 0 0 0-2.377.452L8.567 3.38a.217.217 0 0 0-.295-.086.217.217 0 0 0-.086.295L9.228 5.5C7.502 6.424 6.343 8.178 6.343 10.2h11.314c0-2.022-1.16-3.776-2.885-4.7zM9.543 8.37a.518.518 0 0 1-.517-.517c0-.285.232-.517.517-.517.285 0 .517.232.517.517a.518.518 0 0 1-.517.517zm4.914 0a.518.518 0 0 1-.517-.517c0-.285.232-.517.517-.517.285 0 .517.232.517.517a.518.518 0 0 1-.517.517zM6.343 10.97v7.902c0 .45.366.816.816.816h.865v2.398a.6.6 0 0 0 1.17 0v-2.398h1.612v2.398a.6.6 0 0 0 1.17 0v-2.398h.865c.45 0 .816-.366.816-.816v-7.902H6.343z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-900">Android</p>
              <p className="text-[11px] text-muted-foreground">Google Play</p>
            </div>
          </a>

          {/* iOS */}
          <a
            href={iosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-5 border rounded-xl hover:shadow-md hover:border-gray-900 transition-all group"
          >
            <div className="h-14 w-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-900">iOS</p>
              <p className="text-[11px] text-muted-foreground">App Store</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
