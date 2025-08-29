import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RotateCcw, Code } from 'lucide-react'

interface CodePlaygroundProps {
  isLoading: boolean
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({ isLoading }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  
  const initialCode = `<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 50px;
            margin: 0;
        }
        
        .box {
            background: rgba(255,255,255,0.2);
            padding: 30px;
            border-radius: 15px;
            margin: 20px auto;
            max-width: 300px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
        }
        
        button {
            background: #ff6b6b;
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px;
            transition: all 0.3s ease;
        }
        
        button:hover {
            background: #ff5252;
            transform: scale(1.05);
        }
        
        .emoji {
            font-size: 48px;
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-20px); }
            60% { transform: translateY(-10px); }
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="emoji">🚀</div>
        <h1>Hello Playground!</h1>
        <p>Edite este código e clique em Run!</p>
        <button onclick="changeColor()">Mudar Cor</button>
        <button onclick="changeEmoji()">Novo Emoji</button>
    </div>

    <script>
        const emojis = ['🚀', '🎨', '✨', '🌟', '💫', '🎪', '🎯', '🔥'];
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
        
        function changeColor() {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.querySelector('button').style.background = randomColor;
        }
        
        function changeEmoji() {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            document.querySelector('.emoji').textContent = randomEmoji;
        }
        
        console.log('Playground funcionando!');
    </script>
</body>
</html>`

  const [code, setCode] = useState(initialCode)
  const [isRunning, setIsRunning] = useState(false)

const runCode = () => {
  const iframe = iframeRef.current
  if (!iframe) return

  setIsRunning(true)

  try {
    iframe.srcdoc = code
    console.log('✅ Código injetado via srcdoc')
    setTimeout(() => setIsRunning(false), 300)
  } catch (error) {
    console.error('Erro ao executar código:', error)
    setIsRunning(false)
  }
}


  const resetCode = () => {
    setCode(initialCode)
    setTimeout(runCode, 100)
  }

  useEffect(() => {
    if (!isLoading && code) {
      const timer = setTimeout(runCode, 500)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (isLoading) {
    return (
      <section id="playground" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-12 skeleton max-w-md mx-auto"></div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded skeleton w-32"></div>
              <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl skeleton"></div>
              <div className="flex space-x-4">
                <div className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
                <div className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded skeleton"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded skeleton w-24"></div>
              <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl skeleton"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="playground" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center justify-center space-x-3">
            <Code className="text-purple-600" size={36} />
            <span>Code Playground</span>
            <span className="text-2xl">🐱</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Um editor interativo para testar código HTML/JS. Comece com o gatinho pixel art ou crie algo novo!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Code size={20} />
                <span>Editor</span>
              </h3>
              
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md"
                >
   
                  <span>{isRunning ? 'Executando...' : 'Run ▶'}</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetCode}
                  className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md"
                >
                  <RotateCcw size={16} />
                  <span>Reset</span>
                </motion.button>
              </div>
            </div>

            <div className="relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 p-4 code-editor resize-none focus:ring-2 focus:ring-purple-500 text-sm leading-relaxed"
                placeholder="Digite seu código HTML/JS aqui..."
                spellCheck={false}
              />
              
              {/* Code Editor Features */}
              <div className="absolute bottom-2 right-2 flex space-x-2">
                <span className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">
                  HTML/JS
                </span>
                <span className="bg-gray-800 text-blue-400 px-2 py-1 rounded text-xs font-mono">
                  {code.split('\n').length} linhas
                </span>
              </div>
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span>Preview</span>
            </h3>

            <div className="relative bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
              <div className="h-6 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-2 px-3">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">preview.html</div>
              </div>
              
              <iframe
                ref={iframeRef}
                className="w-full h-96 bg-white"
                title="Code Preview"
                sandbox="allow-scripts"
                style={{ border: 'none' }}
              />
            </div>

            <div className="text-center">
            <motion.div className="inline-block text-purple-600 dark:text-purple-400">
                {isRunning ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm">Executando código...</span>
                  </div>
                ) : (
                  <span className="text-sm text-gray-500">Clique em "Run ▶" para executar</span>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md"
        >
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
            <span>💡</span>
            <span>Dicas do Playground</span>
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-purple-500">•</span>
                <span>Use HTML completo com CSS e JavaScript</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500">•</span>
                <span>Teste pequenos codigos e veja acontecer</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500">•</span>
                <span>Experimente criar animações e jogos simples</span>
              </li>
            </ul>
            
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-purple-500">•</span>
                <span>Use Canvas API para gráficos interativos</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500">•</span>
                <span>O código roda em um ambiente sandbox seguro</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500">•</span>
                <span>Clique em "Reset" para voltar ao codigo anterior</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodePlayground