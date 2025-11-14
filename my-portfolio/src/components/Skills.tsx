import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Wrench } from "lucide-react";

interface SkillsProps {
  isLoading: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isLoading }) => {
const skillCategories = [
  {
    title: "Front-End",
    icon: <Palette size={32} color="#8741EF" />,
    skills: [
      { name: "React.js", color: "from-purple-400 to-purple-600" },
      { name: "Next.js", color: "from-purple-500 to-purple-700" },
      { name: "Vite", color: "from-purple-600 to-purple-800" },
      { name: "Tailwind CSS", color: "from-purple-400 to-indigo-600" },
      { name: "TypeScript", color: "from-purple-300 to-purple-500" },
      { name: "Figma", color: "from-purple-500 to-pink-600" },
    ],
  },
  {
    title: "Back-End",
    icon: <Code size={32} color="#8741EF" />,
    skills: [
      { name: "Node.js", color: "from-purple-600 to-purple-800" },
      { name: "Java + Spring Boot", color: "from-indigo-500 to-purple-700" },
      { name: "Python", color: "from-indigo-600 to-purple-700" },
      { name: "PostgreSQL", color: "from-purple-400 to-pink-600" },
      { name: "MySQL / SQL", color: "from-purple-400 to-pink-600" },
      { name: "APIs REST / JSON", color: "from-indigo-400 to-purple-600" },
    ],
  },
  {
    title: "Infraestrutura & DevOps",
    icon: <Wrench size={32} color="#8741EF" />,
    skills: [
      { name: "Docker", color: "from-purple-500 to-purple-700" },
      { name: "AWS", color: "from-indigo-500 to-purple-600" },
      { name: "Datadog", color: "from-purple-600 to-indigo-700" },
      { name: "WordPress", color: "from-purple-700 to-purple-900" },
    ],
  },
  {
    title: "Automação & RPA",
    icon: <Wrench size={32} color="#8741EF" />,
    skills: [
      { name: "Power Automate", color: "from-purple-500 to-pink-600" },
      { name: "UiPath", color: "from-indigo-400 to-purple-600" },
    ],
  },
  {
    title: "Ferramentas & Outros",
    icon: <Wrench size={32} color="#8741EF" />,
    skills: [
      { name: "Git & GitHub", color: "from-purple-400 to-purple-700" },
      { name: "Linux", color: "from-indigo-500 to-purple-600" },
    ],
  },
];


  if (isLoading) {
    return (
      <section id="skills" className="section-padding">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-12 skeleton max-w-md mx-auto"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded skeleton w-32"></div>
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(6)].map((_, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg skeleton"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções incríveis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="flex justify-center text-xl mb-2">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-lg p-3 text-center text-white font-medium text-sm bg-gradient-to-r ${skill.color} shadow-md hover:shadow-lg transition-all duration-300 cursor-default group`}
                  >
                    <div className="relative z-10">{skill.name}</div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-white bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                  </motion.div>
                ))}
              </div>

              {/* Category description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: categoryIndex * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="mt-4 text-center"
              >
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {category.title === "Frontend" &&
                    "Interfaces modernas e responsivas"}
                  {category.title === "Backend" &&
                    "APIs robustas e banco de dados"}
                  {category.title === "Ferramentas & DevOps" &&
                    "Desenvolvimento e deploy eficientes"}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-6 py-3 rounded-full font-medium">
            <span>🚀</span>
            <span>Sempre aprendendo novas tecnologias e melhores práticas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
