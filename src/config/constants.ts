import { tech } from "@/assets";

export const techGroups = {
  Frontend: [
    { name: "React.js", image: tech.reactjs },
    { name: "Tailwind CSS", image: tech.tailwind },
  ],
  Backend: [
    { name: ".NET Core", image: tech.dotnetcore },
    { name: "Node.js", image: tech.nodejs },
    { name: "SQL Server", image: tech.sqlserver },
    { name: "PostgreSQL", image: tech.postgresql },
  ],
  Mobile: [
    { name: "React Native", image: tech.reactjs },
    { name: "Flutter", image: tech.flutter },
  ],
  Tools: [
    { name: "Docker", image: tech.docker },
    { name: "Kubernetes", image: tech.kubernetes },
    { name: "GCP", image: tech.googlecloud },
    { name: "Figma", image: tech.figma },
  ],
};

// const timeline = [
//   {
//     year: "2021–2023",
//     title: "Nawa Data Solutions",
//     role: "Application Developer (React Native, .NET Core, SQL Server)",
//   },
//   {
//     year: "2020–2021",
//     title: "Taldio",
//     role: "Mobile Developer (React Native, .NET Core, SQL Server)",
//   },
//   {
//     year: "2017–2018",
//     title: "Patpat Studio",
//     role: "Freelance Programmer (Android, Graphic Design)",
//   },
//   // {
//   //   year: "2015",
//   //   title: "Petrokimia Gresik",
//   //   role: "Student Internship in Maintenance Division",
//   // },
//   // { year: "2014", title: "UGM", role: "Lab Assistant – Digital Electronics" },
// ];

export const experiences = [
  {
    company: "Nawa Data Solutions",
    logo: "/logos/nawa.png",
    title: "Fullstack Developer",
    duration: "2021 – 2023",
    description: [
      "Developed and deployed mobile & web apps for clients according to their needs.",
      "Maintain and fixed bugs in existing applications.",
      "Collaborated with product managers and business analysts to gather requirements and deliver solutions.",
    ],
    tech: [
      ".NET Core",
      "React Native",
      "React JS",
      "SQL Server",
      "PostgreSQL",
      "Kubernetes",
      "GCP",
    ],
  },
  {
    company: "Taldio",
    logo: "/logos/nawa.png",
    title: "Mobile Developer",
    duration: "2020 – 2021",
    description: [
      "Developed and deployed mobile apps for job seeking platform.",
      "Collaborated with web and design team to integrate features and ensure consistency.",
      "Implemented features and fixed bugs in React Native and .NET Core.",
    ],
    tech: ["React Native", ".NET Core", "SQL Server"],
  },
  {
    company: "Patpat Studio",
    logo: "/logos/patpat.png",
    title: "Freelance Programmer",
    duration: "2017 – 2018",
    description: [
      "Built Android applications for clients.",
      "Handled the design and development of the application.",
      "Collaborated with clients to gather requirements and deliver solutions.",
    ],
    tech: ["Android", "Java"],
  },
];
