export interface project {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

export const projects: project[] = [
  {
    id: 1,
    name: "Crescent Egypt",
    link: "https://crescent.com.eg",
    description: "Insurance Brokerage Company",
    image: "/assets/projectImages/crescent.jpg",
    technologies: ["Next.js", "Next-Intl", "Sanity.io", "GSAP", "Figma"],
  },
  {
    id: 2,
    name: "Flagpole Agency",
    link: "https://flagpoleagency.com",
    description: "Digital Marketing Agency",
    image: "/assets/projectImages/flagpole.jpg",
    technologies: ["Webflow", "Figma"],
  },
  // {
  //   id: 3,
  //   name: "Tyckt",
  //   link: "https://tickets-mu-flax.vercel.app/",
  //   description: "Concerts & Events Booking",
  //   image: "/assets/projectImages/tyckt.jpg",
  //   technologies: [
  //     "React.js",
  //     "React Query",
  //     "React Hook Form",
  //     "Firebase",
  //     "Figma",
  //   ],
  // },
];
