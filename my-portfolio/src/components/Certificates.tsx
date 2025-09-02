import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Star, Heart, Laptop, GraduationCap, ShieldCheck, Code, Brain } from "lucide-react";

interface CertificatesProps {
  isLoading: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ isLoading }) => {
  const [activeFilter, setActiveFilter] = useState("all");

 const certificates = [
  {
    title: "Formação React T5 - ONE",
    institution: "Alura",
    date: "2023-10",
    category: "Frontend",
    level: "Intermediário",
    credentialId: "11117b30-5232-4186-9aa0-e99ea8d96173",
    skills: ["React.js", "React Hooks", "REACT"],
    color: "from-orange-500 to-orange-700",
    icon: <Heart />,
    verifyUrl: "https://cursos.alura.com.br",
  },
  {
    title: "Formação Front End T5 - ONE",
    institution: "Alura",
    date: "2023-08",
    category: "Frontend",
    level: "Intermediário",
    credentialId: "6b16279d-e2f2-4d0d-84d5-9e4607ddb647",
    skills: ["JavaScript", "HTML5", "CSS"],
    color: "from-yellow-500 to-yellow-700",
    icon: <Code />,
    verifyUrl: "https://cursos.alura.com.br",
  },
  {
    title: "Formação Iniciante em Programação T5 - ONE",
    institution: "Alura",
    date: "2023-05",
    category: "Frontend",
    level: "Básico",
    credentialId: "58d57d79-2102-466a-8e25-e51df34cdda9",
    skills: ["Lógica de Programação", "Fundamentos", "JavaScript"],
    color: "from-blue-500 to-blue-700",
    icon: <Brain />,
    verifyUrl: "https://cursos.alura.com.br",
  },
  {
    title: "Programação Web",
    institution: "WoMakersCode",
    date: "2023-05",
    category: "Frontend",
    level: "Básico",
    credentialId: "nncexb1rrt",
    skills: ["JavaScript", "Git", "GitHub", "HTML", "CSS", "Design thinking", "Lógica de programação"],
    color: "from-pink-500 to-pink-700",
    icon: <Laptop />,
    verifyUrl: "https://womakerscode.org",
  },
  {
    title: "Programação Front-End Basics - Discover",
    institution: "Rocketseat",
    date: "2023-03",
    category: "Frontend",
    level: "Básico",
    credentialId: "N/A",
    skills: ["HTML5", "JavaScript", "CSS"],
    color: "from-purple-500 to-purple-700",
    icon: <GraduationCap />,
    verifyUrl: "https://app.rocketseat.com.br/discover",
  },
  {
    title: "Segurança da Informação - SecurityGirls",
    institution: "Microsoft",
    date: "2023-03",
    category: "Security",
    level: "Intermediário",
    credentialId: "N/A",
    skills: [
      "Segurança da informação",
      "Segurança em nuvem",
      "Microsoft 365",
      "Azure Active Directory",
      "Governança",
      "Cibersegurança",
    ],
    color: "from-gray-600 to-gray-800",
    icon: <ShieldCheck />,
    verifyUrl: "https://microsoft.com",
  },
];

  const categories = [
    "all",
    "Cloud",
    "Frontend",
    "Full Stack",
    "DevOps",
    "AI/ML",
    "Security",
  ];

  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === activeFilter);

  if (isLoading) {
    return (
      <section id="certificates" className="section-padding">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-12 skeleton max-w-md mx-auto"></div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded-full skeleton"
              ></div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 h-64 skeleton"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="certificates" className="section-padding">
      <div className="container-custom max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Certificações
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Certificações profissionais que validam minha expertise em diversas
            tecnologias
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
              }`}
            >
              {category === "all" ? "Todos" : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
            >
              {/* Header with gradient */}
              {/* <div className={`h-4 bg-gradient-to-r ${cert.color}`}></div> */}

              <div className="p-6">
                {/* Icon and Level */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex items-center space-x-2">
                    <Star className="text-yellow-500" size={16} />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {cert.level}
                    </span>
                  </div>
                </div>

                {/* Title and Institution */}
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                  {cert.institution}
                </p>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar size={14} className="mr-2" />
                  {cert.date}
                </div>

                <div>
                  
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                      +{cert.skills.length - 3} mais
                    </span>
                  )}
                </div>

                {/* Credential ID */}
                {/* <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-mono bg-gray-50 dark:bg-gray-800 p-2 rounded border-l-2 border-purple-500">
                  ID: {cert.credentialId}
                </div> */}

                {/* Verify Button */}
                {/* <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-[6rem] flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 group/btn"
                >
                  <CheckCircle size={16} />
                  <span>Verificar</span>
                  <ExternalLink
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform duration-200"
                  />
                </motion.a> */}
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: certificates.length, label: "Certificações", icon: "🏆" },
            { number: new Set(certificates.map(c => c.institution)).size, label: "Instituições", icon: "🏛️" },
            { number: new Set(certificates.flatMap(c => c.skills)).size, label: "Habilidades", icon: "⚡" },
            { number: "2024", label: "Último Ano", icon: "📅" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Certificates;
