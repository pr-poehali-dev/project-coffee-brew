import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Разработка под ключ",
    description: "Берём проект с нуля до запуска: анализ, архитектура, разработка, тестирование и деплой. Вы получаете готовый продукт.",
    icon: "zap",
    badge: "Полный цикл",
  },
  {
    title: "Команда на аутсорс",
    description: "Выделенные команды разработчиков, которые работают как ваш внутренний IT-отдел — прозрачно, предсказуемо и по фиксированной цене.",
    icon: "link",
    badge: "Команда",
  },
  {
    title: "Быстрый старт",
    description: "Запускаем проект в течение 3 дней после брифинга. Никаких долгих согласований — сразу в работу.",
    icon: "target",
    badge: "Скорость",
  },
  {
    title: "Гибкие технологии",
    description: "React, Python, Node.js, мобильные приложения, CRM-интеграции — работаем со стеком, который нужен вашему бизнесу.",
    icon: "brain",
    badge: "Технологии",
  },
  {
    title: "Прозрачная стоимость",
    description: "Фиксированный бюджет или Time & Material — выбираете вы. Без скрытых платежей и сюрпризов при сдаче.",
    icon: "lock",
    badge: "Надёжность",
  },
  {
    title: "Поддержка 24/7",
    description: "Мониторинг и поддержка продукта после запуска. Ваш бизнес не останавливается — мы всегда на связи.",
    icon: "globe",
    badge: "Поддержка",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что мы делаем</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Берём на себя всю IT-нагрузку — вы сосредотачиваетесь на росте бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
