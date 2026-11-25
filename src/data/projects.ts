import type { Project, VideoItem } from "@/types";

export const showreelSample: VideoItem = {
  title: "Hamza Bhatti Showreel",
  category: "Portfolio Reel",
  duration: "01:45",
  videoUrl: "/videos/showcase.mp4",
  description:
    "A curated mix of cinematic storytelling, promotional edits, short-form reels, and polished visual edits from my workflow.",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Camera & Focus",
    category: "cinematic",
    duration: "Cinematic",
    client: "Camera & Visual Storytelling",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    description:
      "A polished cinematic edit shaped around strong framing, visual rhythm, and engaging camera-led storytelling.",
    tags: ["Premiere Pro", "Cinematic Edit", "Color Grade"],
    videoUrl: "/videos/camera-focus.mp4",
  },
  {
    id: 2,
    title: "Documentary Story",
    category: "cinematic",
    duration: "Documentary",
    client: "Long-Form Documentary",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    description:
      "A narrative-driven documentary edit with deliberate pacing, interview structure, and cohesive visual storytelling.",
    tags: ["Documentary", "Story Edit", "Sound Design"],
    videoUrl: "/videos/documentary-video.mp4",
  },
  {
    id: 3,
    title: "Product Showcase",
    category: "promotional",
    duration: "Promo",
    client: "Product Campaign",
    thumbnail:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description:
      "A dynamic product-focused edit that highlights key features through sharp cuts, motion, and premium presentation.",
    tags: ["Product Edit", "After Effects", "Brand Promotion"],
    videoUrl: "/videos/product.mp4",
  },
  {
    id: 4,
    title: "SaaS Platform Overview",
    category: "promotional",
    duration: "SaaS",
    client: "Software Product",
    thumbnail:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    description:
      "A clear and engaging SaaS overview designed to communicate the product experience and core benefits quickly.",
    tags: ["SaaS", "Explainer", "Screen Recording"],
    videoUrl: "/videos/saas-1.mp4",
  },
  {
    id: 5,
    title: "SaaS Product Launch",
    category: "promotional",
    duration: "Launch",
    client: "Software Launch",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description:
      "A polished launch video combining interface highlights, energetic motion, and a direct promotional message.",
    tags: ["SaaS", "Motion Graphics", "Launch Video"],
    videoUrl: "/videos/saas-2.mp4",
  },
];

export const projectFilters = [
  { id: "all" as const, label: "All Projects" },
  { id: "cinematic" as const, label: "Cinematic Videos" },
  { id: "reels" as const, label: "Social Media Reels" },
  { id: "youtube" as const, label: "YouTube Videos" },
  { id: "promotional" as const, label: "Promotional Videos" },
  { id: "short-form" as const, label: "Short-Form Content" },
];
