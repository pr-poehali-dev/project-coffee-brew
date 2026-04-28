import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Стартапы и продуктовые компании",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Помогаем стартапам быстро запустить MVP и выйти на рынок. Берём техническую сторону на себя —
            от выбора архитектуры до первого релиза. Вы фокусируетесь на продукте и клиентах.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              MVP за 4–6 недель
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Гибкая команда под нужды проекта
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Техническое сопровождение после запуска
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Средний и крупный бизнес",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Усиливаем внутреннюю команду или полностью закрываем IT-функцию. Разрабатываем корпоративные
            системы, интеграции и автоматизацию бизнес-процессов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Выделенная команда на долгосрок
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              CRM, ERP и кастомные интеграции
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Строгое соблюдение сроков и бюджета
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "E-commerce и маркетплейсы",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Создаём интернет-магазины, маркетплейсы и платёжные решения с нуля или модернизируем
            существующие платформы для роста продаж и удобства покупателей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Быстрые и конверсионные интерфейсы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Интеграция с платёжными системами и логистикой
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Масштабируемая архитектура под нагрузку
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Кому мы помогаем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Leasy IT работает с компаниями любого масштаба — от стартапов до крупного бизнеса.
            Подбираем формат сотрудничества под ваши задачи и бюджет.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
