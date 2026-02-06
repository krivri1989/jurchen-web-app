"use client";

import { Smartphone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeepLinkButtonProps {
  productId: string;
  productName: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DeepLinkButton({ productId, productName }: DeepLinkButtonProps) {
  const deepLink = `jurchen://product/${productId}`;
  const fallbackUrl = "https://play.google.com/store";

  const handleOpenInApp = () => {
    const timeout = setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 2500);

    window.location.href = deepLink;

    window.addEventListener("blur", () => {
      clearTimeout(timeout);
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <Button
        size="lg"
        className="w-full gap-2 text-base"
        onClick={handleOpenInApp}
      >
        <Smartphone className="h-5 w-5" />
        Open in App
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        View pricing, add to cart &amp; order directly from our mobile app
      </p>
      <a
        href={fallbackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 text-sm text-primary hover:underline"
      >
        <ExternalLink className="h-3 w-3" />
        Download the Jurchen App
      </a>
    </div>
  );
}
