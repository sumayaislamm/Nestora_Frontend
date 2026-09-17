"use client";

import { useEffect } from "react";

const ASSETS = {
  images: [
    "https://res.cloudinary.com/yznthkkx/image/upload/v1787328510/pexels-brayan-ramirez-1648892253-34478703.jpg",
    "https://res.cloudinary.com/yznthkkx/image/upload/v1787328508/pexels-egorkomarov-12061813.jpg",
    "https://res.cloudinary.com/yznthkkx/image/upload/v1787328507/pexels-valeria-drozdova-2148646707-38934658.jpg",
  ],

  video:
    "https://res.cloudinary.com/yznthkkx/video/upload/v1789620875/mixkit-house-keys-on-a-table-15064-hd-ready.mp4",
};

export default function PreloadAssets() {
  useEffect(() => {
    // Preload images
    ASSETS.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Preload video
    const video = document.createElement("video");
    video.src = ASSETS.video;
    video.preload = "auto";
    video.load();
  }, []);

  return null;
}