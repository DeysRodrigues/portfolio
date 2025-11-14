import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Clock } from 'lucide-react'

interface ProjectsProps {
  isLoading: boolean
}

const Projects: React.FC<ProjectsProps> = ({ isLoading }) => {

const projects = [
  {
    title: "Dynamic Notes",
    description:
      "Desenvolvimento de um site dashboard modular para gerenciamento de tasks, open source focado em box. Com widgets que podem ser arrastados e redimensionados. Responsivo para mobile, tablet e desktop.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop",
    technologies: ["React.js", "Tailwind", "TypeScript", "Figma", "GitHub"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    year: "2025",
    status: "Em desenvolvimento",
  },
  {
    title: "FallsGame",
    description:
      "Um launcher para gerenciar jogos, criado e desenvolvido em equipe, documentado pelo GitLab e utilizando Scrum. Inclui estudo de banco de dados, DER, diagramas de classe e casos de uso.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=240&fit=crop",
    technologies: ["Java", "JavaFX", "Maven", "PostgreSQL", "Scrum"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    year: "2025",
    status: "Concluído",
  },
  {
    title: "Agenda Java Web",
    description:
      "Sistema de agenda de contatos em Java Web. Cadastro, edição, exclusão e listagem de contatos em MySQL, validação de campos e geração de relatório em PDF.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9c2f95?w=400&h=240&fit=crop",
    technologies: ["Java", "JavaBeans", "JDBC", "MySQL", "Apache Tomcat", "MVC"],
    githubUrl: "https://github.com/seuusuario/agenda-javaweb",
    liveUrl: "",
    year: "2025",
    status: "Concluído",
  },

];


  if (isLoading) {
    return (
      <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-12 skeleton max-w-md mx-auto"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg h-[420px]">
                <div className="h-48 bg-gray-200 dark:bg-gray-600 skeleton"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded skeleton"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded skeleton"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded skeleton w-3/4"></div>
                  </div>
                  <div className="flex space-x-2">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-6 w-16 bg-gray-200 dark:bg-gray-600 rounded-full skeleton"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projetos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e interessantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 h-[420px] flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                    project.status === 'Concluído' 
                      ? 'bg-green-500/90 text-white' 
                      : 'bg-purple-500/90 text-white'
                  }`}>
                    {project.status === 'Concluído' ? (
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    ) : (
                      <Clock size={10} />
                    )}
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-purple-900/80 backdrop-blur-sm flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Código</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-purple-600/80 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar size={12} className="mr-1" />
                    {project.year}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium border border-purple-200 dark:border-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
          >
            <Github size={20} />
            <span>Explore mais projetos no GitHub</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects