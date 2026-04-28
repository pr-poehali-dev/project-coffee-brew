import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Code",
    title: "Разработка под ключ",
    description: "Создаём веб-приложения, мобильные приложения и корпоративные системы с нуля. Берём проект от идеи до запуска.",
    price: "от 150 000 ₽",
    features: ["Анализ и архитектура", "Дизайн и разработка", "Тестирование и деплой", "Поддержка после запуска"],
  },
  {
    icon: "Users",
    title: "Выделенная команда",
    description: "Предоставляем разработчиков, которые работают как ваш штатный IT-отдел — полностью погружены в проект.",
    price: "от 120 000 ₽/мес",
    features: ["1–10 специалистов в команде", "Полная прозрачность процессов", "Гибкое масштабирование", "Ежедневные отчёты"],
  },
  {
    icon: "Headphones",
    title: "Техподдержка и сопровождение",
    description: "Берём на себя поддержку существующих систем: мониторинг, обновления, исправление ошибок и доработки.",
    price: "от 30 000 ₽/мес",
    features: ["Мониторинг 24/7", "SLA до 4 часов", "Регулярные обновления", "Доработки по запросу"],
  },
  {
    icon: "Zap",
    title: "MVP за 4 недели",
    description: "Быстрый запуск минимально жизнеспособного продукта для проверки гипотезы и выхода на рынок.",
    price: "от 80 000 ₽",
    features: ["Чёткие сроки", "Фиксированная стоимость", "Базовый дизайн включён", "Готов к тестированию"],
  },
  {
    icon: "Link",
    title: "Интеграции и автоматизация",
    description: "Связываем CRM, ERP, 1С, маркетплейсы и любые сервисы между собой. Автоматизируем рутинные процессы.",
    price: "от 50 000 ₽",
    features: ["CRM и ERP интеграции", "API-подключения", "Автоматизация процессов", "Боты и уведомления"],
  },
  {
    icon: "ShoppingCart",
    title: "Интернет-магазины",
    description: "Разрабатываем быстрые конверсионные магазины с удобным каталогом, корзиной и платёжными системами.",
    price: "от 100 000 ₽",
    features: ["Каталог и фильтры", "Оплата и доставка", "Личный кабинет", "Мобильная версия"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Наши услуги</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Закрываем все IT-задачи бизнеса — от идеи до поддержки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-red-500/20 rounded-2xl p-8 bg-white/5 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <Icon name={service.icon} fallback="Code" size={24} className="text-red-400" />
                </div>
                <span className="text-red-400 font-bold text-lg font-orbitron">{service.price}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}