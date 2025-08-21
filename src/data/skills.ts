import { IconType } from "react-icons";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPhp, 
  SiReact, 
  SiVuedotjs, 
  SiNodedotjs, 
  SiDart, 
  SiLaravel, 
  SiFlutter, 
  SiNextdotjs 
} from "react-icons/si";

export type Skill = {
  name: string;
  label: string;
  color: string;
  icon: IconType;
  position: {
    top: string;
    left: string;
  };
};

export const SKILLS: Skill[] = [
  {
    name: "CSS",
    label: "CSS",
    color: "#1572B6",
    icon: SiCss3,
    position: { top: "30%", left: "5%" } // Safe margin
  },
  {
    name: "HTML",
    label: "html",
    color: "#E34F26",
    icon: SiHtml5,
    position: { top: "60%", left: "12%" } // More space
  },
  {
    name: "JavaScript",
    label: "JavaScript",
    color: "#F7DF1E",
    position: { top: "85%", left: "20%" }, // Reduced bottom spacing
    icon: SiJavascript
  },
  {
    name: "PHP",
    label: "php",
    color: "#777BB4",
    icon: SiPhp,
    position: { top: "60%", left: "30%" } // More centered
  },
  {
    name: "React",
    label: "react",
    color: "#61DAFB",
    icon: SiReact,
    position: { top: "75%", left: "42%" } // Safer bottom
  },
  {
    name: "Vue.js",
    label: "vue.js",
    color: "#4FC08D",
    icon: SiVuedotjs,
    position: { top: "50%", left: "50%" } // True center
  },
  {
    name: "React Native",
    label: "react native",
    color: "#61DAFB",
    icon: SiReact,
    position: { top: "25%", left: "60%" } // Center right
  },
  {
    name: "Node.js",
    label: "node.js",
    color: "#339933",
    icon: SiNodedotjs,
    position: { top: "55%", left: "70%" } // Right spacing
  },
  {
    name: "Dart",
    label: "Dart",
    color: "#0175C2",
    icon: SiDart,
    position: { top: "80%", left: "78%" } // Safer bottom
  },
  {
    name: "Laravel",
    label: "Laravel",
    color: "#FF2D20",
    icon: SiLaravel,
    position: { top: "50%", left: "82%" } // Right positioning
  },
  {
    name: "Flutter",
    label: "Flutter",
    color: "#02569B",
    icon: SiFlutter,
    position: { top: "15%", left: "90%" } // Safe right edge
  },
  {
    name: "Next.js",
    label: "Next.Js",
    color: "#000000",
    icon: SiNextdotjs,
    position: { top: "45%", left: "95%" } // Safe right edge
  }
];
