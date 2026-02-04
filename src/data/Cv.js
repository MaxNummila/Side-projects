export const cv = {
  basics: {
    name: "Max Nummila",
    title: "Computer Engineering MSc student — Cloud & Security",
    location: "Finland",
    email: "max@example.com",
    links: [
      { label: "GitHub", url: "https://github.com/MaxNummila" },
      { label: "LinkedIn", url: "https://linkedin.com/in/your-link" },
    ],
  },

  about: [
    "I’m a computer engineering student focused on cloud and security.",
    "I like building practical tools and learning by shipping small projects.",
  ],

  skills: ["Python", "React", "Node.js", "Docker", "Linux", "Git", "Security basics"],

  projects: [
    {
      name: "PCAP Analyzer",
      description: "CLI tool that summarizes PCAP traffic and extracts useful indicators.",
      tech: ["Python", "Scapy"],
      url: "",
    },
    {
      name: "Network Scanner",
      description: "Small TCP scanner + banner grabber for my own lab network.",
      tech: ["Python", "Sockets"],
      url: "",
    },
    {
      name: "Secret Vault",
      description: "Local encrypted vault for storing small secrets safely.",
      tech: ["Python", "Cryptography"],
      url: "",
    },
  ],
};
