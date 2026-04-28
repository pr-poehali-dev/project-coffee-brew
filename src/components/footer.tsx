import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://cdn.poehali.dev/projects/6fa6fd5d-4cfa-460e-859f-1e32196a40ac/bucket/f2adf8bd-91f7-4dd0-8a2c-5b13f5f988f2.png"
              alt="Leasy IT"
              className="h-20 w-auto mb-4"
            />
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              IT-аутсорсинг для бизнеса любого масштаба. Разрабатываем, запускаем и сопровождаем цифровые продукты.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Разработка под ключ
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Выделенная команда
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Техподдержка
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 Leasy IT. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Конфиденциальность
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Cookie-политика
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}