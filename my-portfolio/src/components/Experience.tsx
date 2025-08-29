import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

interface ExperienceProps {
  isLoading: boolean
}

const Experience: React.FC<ExperienceProps> = ({ isLoading }) => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Senior Full Stack Developer",
      period: "2022 - Presente",
      location: "São Paulo, SP",
      type: "Full-time",
      description: [
        "Lidero uma equipe de 5 desenvolvedores na criação de aplicações web escaláveis",
        "Implementei arquitetura de microsserviços que melhorou a performance em 40%",
        "Mentoria de desenvolvedores júniors e code reviews regulares",
        "Tecnologias: React, Node.js, AWS, Docker, PostgreSQL"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      location: "Remote",
      type: "Full-time",
      description: [
        "Desenvolvi MVP de plataforma SaaS do zero, conquistando 10k+ usuários",
        "Integração com múltiplas APIs de terceiros e sistemas de pagamento",
        "Implementação de testes automatizados e CI/CD pipelines",
        "Tecnologias: Vue.js, Express.js, MongoDB, Stripe API"
      ],
      color: "from-green-500 to-green-700"
    },
    {
      company: "WebAgency Pro",
      role: "Frontend Developer",
      period: "2019 - 2020",
      location: "Rio de Janeiro, RJ",
      type: "Full-time",
      description: [
        "Criação de websites responsivos para clientes de diversos setores",
        "Otimização de performance e SEO, melhorando rankings em 60%",
        "Colaboração direta com designers UX/UI para implementar interfaces",
        "Tecnologias: React, Sass, Webpack, WordPress"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      company: "FreelanceHub",
      role: "Desenvolvedor Freelancer",
      period: "2018 - 2019",
      location: "Remote",
      type: "Freelance",
      description: [
        "Projetos diversos para pequenas e médias empresas",
        "Desenvolvimento de e-commerces e landing pages",
        "Consultoria em tecnologia e arquitetura de projetos",
        "Tecnologias: JavaScript, PHP, MySQL, WordPress"
      ],
      color: "from-orange-500 to-orange-700"
    }
  ]

  if (isLoading) {
    return (
      <section id="experience" className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-12 skeleton max-w-md mx-auto"></div>
          
          <div className="space-y-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full skeleton"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded skeleton w-48"></div>
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded skeleton w-32"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded skeleton w-24"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded skeleton w-5/6"></div>
                    </div>
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
    <section id="experience" className="section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experiência
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Minha jornada profissional e as experiências que moldaram minha carreira
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center z-10 shadow-lg`}>
                  <Building className="text-white" size={20} />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Full-time' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                      {exp.company}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: (index * 0.1) + (itemIndex * 0.1) 
                          }}
                          viewport={{ once: true }}
                          className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex items-start space-x-2"
                        >
                          <span className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience