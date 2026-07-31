import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Clock, Star, GitFork } from 'lucide-react'

interface ProjectsProps {
  isLoading: boolean
}

interface GithubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  created_at: string
  language: string
  topics: string[]
  stargazers_count: number
  forks_count: number
  archived: boolean
  updated_at: string
}

const Projects: React.FC<ProjectsProps> = ({ isLoading }) => {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      // Check for cached data first
      const cachedRepos = localStorage.getItem('github_repos')
      const cacheTimestamp = localStorage.getItem('github_repos_timestamp')

      // Use cache if it's less than 1 hour old to avoid rate limits
      if (cachedRepos && cacheTimestamp && (Date.now() - parseInt(cacheTimestamp) < 3600000)) {
        setRepos(JSON.parse(cachedRepos).slice(0, 4))
        setIsFetching(false)
        return
      }

      try {
        const response = await fetch('https://api.github.com/users/DeysRodrigues/repos?sort=updated&per_page=4')
        if (response.ok) {
          const data = await response.json()
          setRepos(data)
          // Save to cache
          localStorage.setItem('github_repos', JSON.stringify(data))
          localStorage.setItem('github_repos_timestamp', Date.now().toString())
        } else if (cachedRepos) {
          // Fallback to cache even if expired, if API fails (rate limit)
          setRepos(JSON.parse(cachedRepos).slice(0, 4))
        }
      } catch (error) {
        console.error("Erro ao buscar repositórios do GitHub", error)
        if (cachedRepos) {
          setRepos(JSON.parse(cachedRepos).slice(0, 4))
        }
      } finally {
        setIsFetching(false)
      }
    }

    if (!isLoading) {
      fetchRepos()
    }
  }, [isLoading])

  if (isLoading || isFetching) {
    return (
      <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-12 skeleton max-w-md mx-auto"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg h-[340px]">
                <div className="h-32 bg-gray-200 dark:bg-gray-600 skeleton"></div>
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
            Meus Projetos do GitHub
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projetos recentes extraídos diretamente via GitHub API
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {repos.length === 0 && !isFetching && !isLoading && (
            <div className="col-span-full text-center text-gray-500 py-10">
              <p>Limite da API do GitHub atingido. Tente novamente mais tarde.</p>
            </div>
          )}
          {repos.map((repo, index) => {
            const formatName = (name: string) => name.replace(/-/g, ' ').replace(/_/g, ' ')
            const year = new Date(repo.created_at).getFullYear()
            const status = repo.archived ? 'Arquivado' : 'Ativo'
            const technologies = repo.topics.length > 0 ? repo.topics : (repo.language ? [repo.language] : [])
            const cacheBuster = repo.updated_at ? new Date(repo.updated_at).getTime() : Date.now()
            const ogImageUrl = `https://opengraph.githubassets.com/1/DeysRodrigues/${repo.name}?v=${cacheBuster}`

            return (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 h-[340px] flex flex-col"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-32 bg-gray-100 dark:bg-gray-800">
                  <img
                    src={ogImageUrl}
                    alt={repo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop'
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Stats badges */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center space-x-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-2 py-1 rounded">
                        <Star size={12} className="text-yellow-400" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center space-x-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-2 py-1 rounded">
                        <GitFork size={12} className="text-gray-300" />
                        <span>{repo.forks_count}</span>
                      </span>
                    )}
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${status === 'Arquivado'
                        ? 'bg-gray-500/90 text-white'
                        : 'bg-green-500/90 text-white'
                      }`}>
                      {status === 'Arquivado' ? (
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      ) : (
                        <Clock size={10} />
                      )}
                      <span>{status}</span>
                    </span>
                  </div>

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-purple-900/80 backdrop-blur-sm flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Código</span>
                    </motion.a>

                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-purple-600/80 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-200"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 capitalize truncate" title={formatName(repo.name)}>
                      {formatName(repo.name)}
                    </h3>

                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 shrink-0 ml-2">
                      <Calendar size={12} className="mr-1" />
                      {year}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">
                    {repo.description || "Projeto sem descrição no GitHub."}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-[10px] rounded font-medium border border-purple-200 dark:border-purple-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {technologies.length > 4 && (
                      <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] rounded font-medium border border-gray-200 dark:border-gray-700">
                        +{technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
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
            href="https://github.com/DeysRodrigues"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
          >
            <Github size={20} />
            <span>Ver todos os repositórios</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
