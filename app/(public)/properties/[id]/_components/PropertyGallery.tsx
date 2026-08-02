"use client";

import { useState } from "react";
import Image from "next/image";

export default function PropertyGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
const validImages = (images || []).filter(
  (img) => typeof img === "string" && img.trim().startsWith("http")
);
 if (validImages.length === 0) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center rounded-2xl bg-muted text-muted-foreground">
        No images available
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border">
        <Image
          src={validImages[activeIndex]}
          alt="Property image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      {validImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto">
          {validImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg border-2 ${
                idx === activeIndex ? "border-primary" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}