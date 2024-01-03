import type { IconType } from 'react-icons';
import {
  SiTypescript, SiJavascript,
  SiReact, SiNextdotjs,
  SiHtml5, SiCss3,
  SiFramer, SiWebpack,
  SiMongodb, SiSocketdotio,
  SiJquery, SiMysql,
  SiExpress, SiChakraui,
  SiFirebase, SiBootstrap,
  SiTailwindcss, SiTrpc, SiPrisma,
  SiPlanetscale, SiAstro
} from 'react-icons/si';


export interface TechSkillIconObj {
  icon: IconType,
  skill: string
};

 export const techSkillsWithIcon: TechSkillIconObj[] = [
  {
    icon: SiTypescript,
    skill: "Typescript"
  },
  {
    icon: SiJavascript,
    skill: "Javascript"
  },
  {
    icon: SiReact,
    skill: "React"
  },
  {
    icon: SiNextdotjs,
    skill: "Next.js"
  },
  {
    icon: SiHtml5,
    skill: "HTML5"
  },
  {
    icon: SiCss3,
    skill: "CSS3"
  },
  {
    icon: SiFramer,
    skill: "Framer Motion"
  },
  {
    icon: SiWebpack,
    skill: "Webpack"
  },
  {
    icon: SiExpress,
    skill: "Express.js"
  },
  {
    icon: SiMongodb,
    skill: "MongoDb"
  },
  {
    icon: SiSocketdotio,
    skill: "Socket.io"
  },
  {
    icon: SiJquery,
    skill: "JQuery"
  },
  {
    icon: SiMysql,
    skill: "MySQL"
  },
  {
    icon: SiBootstrap,
    skill: "Bootstrap"
  },
  {
    icon: SiChakraui,
    skill: "Chakra UI"
  },
  {
    icon: SiFirebase,
    skill: "Firebase"
  },
  {
    icon: SiTailwindcss,
    skill: "Tailwind CSS"
  },
  {
    icon: SiTrpc,
    skill: "tRPC"
  },
  {
    icon: SiPrisma,
    skill: "Prisma ORM"
  },
  {
    icon: SiPlanetscale,
    skill: "Planetscale"
  },
  {
    icon: SiAstro,
    skill: "Astro"
  },

];