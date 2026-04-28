import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как быстро вы можете начать работу?",
      answer:
        "Обычно стартуем в течение 3 рабочих дней после согласования брифа и договора. На первой встрече обсуждаем задачи, состав команды и план работ.",
    },
    {
      question: "Как устроено ценообразование?",
      answer:
        "Работаем в двух форматах: фиксированная стоимость (Fix Price) — когда требования чётко определены, или Time & Material — когда проект развивается итерационно. Обсудим, что лучше подходит вашей задаче.",
    },
    {
      question: "Что если результат меня не устроит?",
      answer:
        "Работаем по этапам с промежуточными демо и правками. Вы принимаете каждый этап до перехода к следующему — никаких сюрпризов в финале.",
    },
    {
      question: "Вы работаете только с крупными проектами?",
      answer:
        "Нет, мы работаем с проектами любого масштаба — от небольшого лендинга до сложной корпоративной системы. Минимальный бюджет обсуждается индивидуально.",
    },
    {
      question: "Кто будет работать над моим проектом?",
      answer:
        "Под каждый проект формируется команда: разработчики, дизайнер (при необходимости) и менеджер. Вы всегда знаете, кто и над чем работает.",
    },
    {
      question: "Что происходит после запуска проекта?",
      answer:
        "Предлагаем техническую поддержку и сопровождение на любой срок. Следим за работой системы, вносим правки и добавляем новые функции по мере роста вашего бизнеса.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на вопросы, которые чаще всего задают до начала сотрудничества.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
