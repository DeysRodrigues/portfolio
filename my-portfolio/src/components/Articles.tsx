import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Clock, Eye, BookOpen, Star } from 'lucide-react'

interface ArticlesProps {
  isLoading: boolean
}

const Articles: React.FC<ArticlesProps> = ({ isLoading }) => {
  const [activeFilter, setActiveFilter] = useState('all')

  const articles = [
    {
      title: "Como Construir APIs RESTful Escaláveis com Node.js",
      description: "Guia completo sobre arquitetura de APIs, boas práticas de segurança e otimização de performance para aplicações em larga escala.",
      platform: "LinkedIn",
      platformIcon: "💼",
      date: "2024-01-15",
      readTime: "8 min",
      views: "2.3k",
      category: "Backend",
      tags: ["Node.js", "API", "Arquitetura", "Performance"],
      featured: true,
      url: "https://linkedin.com/pulse/article",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "React Hooks: Patterns Avançados e Otimizações",
      description: "Explorando custom hooks, memoização, e técnicas avançadas para criar componentes React mais eficientes e reutilizáveis.",
      platform: "Notion",
      platformIcon: "📝",
      date: "2024-01-08",
      readTime: "12 min",
      views: "1.8k",
      category: "Frontend",
      tags: ["React", "Hooks", "Performance", "Patterns"],
      featured: false,
      url: "https://notion.so/article",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Deploy Automatizado com Docker e GitHub Actions",
      description: "Tutorial prático sobre como configurar CI/CD pipelines eficientes usando containers Docker e automação GitHub Actions.",
      platform: "Portfolio",
      platformIcon: "🌐",
      date: "2023-12-20",
      readTime: "10 min",
      views: "3.1k",
      category: "DevOps",
      tags: ["Docker", "CI/CD", "GitHub Actions", "Deployment"],
      featured: true,
      url: "https://portfolio.com/article",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Machine Learning na Web: TensorFlow.js em Produção",
      description: "Como integrar modelos de ML diretamente no navegador, otimizações para performance e casos de uso práticos.",
      platform: "LinkedIn",
      platformIcon: "💼",
      date: "2023-12-05",
      readTime: "15 min",
      views: "4.2k",
      category: "AI/ML",
      tags: ["TensorFlow.js", "Machine Learning", "JavaScript", "WebML"],
      featured: false,
      url: "https://linkedin.com/pulse/ml-article",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Micro-frontends: Arquitetura Moderna para Grandes Equipes",
      description: "Estratégias para dividir aplicações frontend em módulos independentes, gerenciamento de estado e comunicação entre microfrontends.",
      platform: "Notion",
      platformIcon: "📝",
      date: "2023-11-18",
      readTime: "20 min",
      views: "2.9k",
      category: "Arquitetura",
      tags: ["Micro-frontends", "Arquitetura", "Escalabilidade", "Webpack"],
      featured: true,
      url: "https://notion.so/microfrontends",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Segurança em Aplicações Web: Guia Prático 2024",
      description: "Checklist completo de segurança, desde autenticação JWT até proteção contra ataques OWASP Top 10.",
      platform: "Portfolio",
      platformIcon: "🌐",
      date: "2023-11-02",
      readTime: "18 min",
      views: "5.7k",
      category: "Security",
      tags: ["Security", "OWASP", "JWT", "Authentication"],
      featured: false,
      url: "https://portfolio.com/security-guide",
      color: "from-red-500 to-pink-600"
    }
  ]

  const platforms = ['all', 'LinkedIn', 'Notion', 'Portfolio']
  const categories = ['all', 'Frontend', 'Backend', 'DevOps', 'AI/ML', 'Arquitetura', 'Security']

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => article.platform === activeFilter || article.category === activeFilter)

  if (isLoading) {
    return (
      <section id="articles" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-12 skeleton max-w-md mx-auto"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-full skeleton"></div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 rounded-2xl p-6 h-80 skeleton"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="articles" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Artigos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Reflexões e conhecimentos técnicos que compartilho em diferentes plataformas
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[...platforms.slice(0, -1), ...categories.slice(1)].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter === 'all' ? 'all' : filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter === 'all' ? 'Todos' : filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => window.open(article.url, '_blank')}
            >
              {/* Header with gradient and featured badge */}
              <div className="relative">
                <div className={`h-6 bg-gradient-to-r ${article.color}`}></div>
                {article.featured && (
                  <div className="absolute top-2 right-4">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                      <Star className="text-yellow-500" size={16} fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Platform and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{article.platformIcon}</span>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {article.platform}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={12} />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                    <BookOpen size={12} className="mr-1" />
                    {article.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 text-xs rounded-md font-medium">
                      +{article.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Read More Button */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-medium group/btn"
                >
                  <span>Ler artigo completo</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none"></div>
            </motion.article>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { 
              number: articles.length, 
              label: "Artigos Publicados", 
              icon: "📚",
              color: "text-purple-600 dark:text-purple-400"
            },
            { 
              number: `${articles.reduce((total, article) => total + parseFloat(article.views.replace('k', '')), 0).toFixed(1)}k`, 
              label: "Visualizações Totais", 
              icon: "👀",
              color: "text-blue-600 dark:text-blue-400"
            },
            { 
              number: new Set(articles.map(a => a.platform)).size, 
              label: "Plataformas", 
              icon: "🌐",
              color: "text-green-600 dark:text-green-400"
            },
            { 
              number: articles.filter(a => a.featured).length, 
              label: "Artigos Destacados", 
              icon: "⭐",
              color: "text-yellow-600 dark:text-yellow-400"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-6 py-3 rounded-full font-medium border border-purple-200 dark:border-purple-700">
            <BookOpen size={16} />
            <span>Novos artigos publicados mensalmente</span>
            <span className="animate-pulse">📝</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Articles