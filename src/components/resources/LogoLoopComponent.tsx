import React from "react";
import LogoLoop from "../ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useMediaQuery } from "../../lib/useMediaQuery";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/assets/svg/logos/adobe.svg",
    alt: "adobe",
    href: "https://www.adobe.com",
  },
  {
    src: "/assets/svg/logos/canva.svg",
    alt: "canva",
    href: "https://www.canva.com",
  },
  {
    src: "/assets/svg/logos/linear.svg",
    alt: "linear",
    href: "https://linear.app",
  },
  {
    src: "/assets/svg/logos/slack.svg",
    alt: "slack",
    href: "https://slack.com",
  },
  {
    src: "/assets/svg/logos/stripe.svg",
    alt: "stripe",
    href: "https://stripe.com",
  },
  {
    src: "/assets/svg/logos/webflow.svg",
    alt: "webflow",
    href: "https://webflow.com",
  },
  {
    src: "/assets/svg/logos/zoom.svg",
    alt: "zoom",
    href: "https://zoom.us",
  },
];

function LogoLoopComponent({ className }: { className?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={20}
        direction="left"
        logoHeight={isMobile ? 30 :48}
        gap={isMobile ? 30 :50}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default LogoLoopComponent;
