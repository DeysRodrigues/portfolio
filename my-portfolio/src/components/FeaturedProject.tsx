import React from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowRight, Zap, GitCommit } from 'lucide-react'

interface FeaturedProjectProps {
  isLoading: boolean
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ isLoading }) => {
  // Dados do projeto em destaque (Pode virar prop depois se quiser)
  const project = {
    title: "Dynamic Notes",
    subtitle: "Dashboard Modular & Gerenciador de Tarefas",
    description: "Um sistema completo para organização pessoal focado em produtividade. O diferencial é a arquitetura de widgets arrastáveis (drag-and-drop) que permite ao usuário personalizar totalmente seu espaço de trabalho.",
    image: "/image.png", // Imagem maior e de alta qualidade
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion", "Zustand"],
    status: "Em Desenvolvimento Ativo",
    lastUpdate: "Implementação do Drag & Drop v0.3.3",
    stats: [
      { label: "Commits", value: "180+" },
      { label: "Progresso", value: "75%" },
    ],
    links: {
      demo: "https://www.dynabox.space",
      github: "https://github.com/DeysRodrigues/dynamic_beta"
    }
  }

  if (isLoading) {
    return (
      <section id="featured" className="section-padding bg-purple-50/50 dark:bg-gray-800/50">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded skeleton w-48 mb-12"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded skeleton w-3/4"></div>
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
              <div className="flex gap-4">
                <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
                <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
              </div>
            </div>
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl skeleton"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="featured" className="section-padding bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800/50 relative overflow-hidden">
      
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom max-w-6xl mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-2 mb-12"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
            <Zap size={18} />
          </span>
          <h2 className="text-sm font-bold tracking-wider uppercase text-purple-600 dark:text-purple-400">
            Acompanhe meu projeto atual
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-semibold mb-6 border border-yellow-200 dark:border-yellow-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span>{project.status}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {project.title}
            </h3>
            
            <p className="text-xl text-purple-600 dark:text-purple-400 font-medium mb-6">
              {project.subtitle}
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Status Update Box */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500 shadow-sm mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                <GitCommit size={14} />
                <span>Última atualização:</span>
              </div>
              <p className="font-medium text-gray-900 dark:text-white">
                {project.lastUpdate}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/25"
              >
                <span>Ver Demo Ao Vivo</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 px-6 py-3 rounded-xl font-semibold transition-all"
              >
                <Github size={18} />
                <span>Repositório</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Coluna de Imagem/Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 group">
              <div className="absolute inset-0 bg-purple-600/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Stats Card - Opcional */}
              <div className="absolute bottom-6 right-6 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 hidden md:block">
                <div className="flex space-x-6">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                      <div className="text-xl font-bold text-purple-600 dark:text-purple-400">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Elemento Decorativo atrás da imagem */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-purple-200 dark:border-purple-900 rounded-2xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FeaturedProject