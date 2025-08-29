import React from 'react'
import { motion } from 'framer-motion'
import { Code, Heart, Lightbulb } from 'lucide-react'

interface AboutProps {
  isLoading: boolean
}

const About: React.FC<AboutProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-12 skeleton max-w-md mx-auto"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded skeleton w-3/4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded skeleton w-5/6"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-6 bg-gray-200 dark:bg-gray-700 rounded-xl skeleton h-24"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  const values = [
    {
      icon: Code,
      title: "Código Limpo",
      description: "Escrevo código legível, mantível e eficiente"
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Amo resolver problemas complexos com soluções elegantes"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre busco as melhores práticas e tecnologias"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Sou uma desenvolvedora full stack com mais de 3 anos de experiência criando aplicações web 
              modernas e escaláveis. Minha jornada na programação começou com curiosidade e se transformou 
              em uma verdadeira paixão por tecnologia.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Me especializo em React, TypeScript, Node.js e bancos de dados relacionais e não-relacionais. 
              Adoro trabalhar em equipe, compartilhar conhecimento e sempre busco aprender novas tecnologias 
              para entregar as melhores soluções possíveis.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Quando não estou programando, você me encontrará lendo sobre novas tecnologias, 
              contribuindo para projetos open source ou explorando criação de games. 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <value.icon className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About