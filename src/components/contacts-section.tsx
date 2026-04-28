import Icon from "@/components/ui/icon"

const contacts = [
  {
    icon: "Phone",
    label: "Телефон",
    value: "+7 (999) 000-00-00",
    href: "tel:+79990000000",
  },
  {
    icon: "Mail",
    label: "Email",
    value: "hello@leasy-it.ru",
    href: "mailto:hello@leasy-it.ru",
  },
  {
    icon: "MessageCircle",
    label: "Telegram",
    value: "@leasyit",
    href: "https://t.me/leasyit",
  },
  {
    icon: "MapPin",
    label: "Адрес",
    value: "Москва, ул. Примерная, 1",
    href: "#",
  },
]

export function ContactsSection() {
  return (
    <section id="contacts" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Контакты</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Напишите или позвоните — ответим быстро
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="flex items-start gap-4 p-6 border border-red-500/20 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                  <Icon name={c.icon} fallback="Phone" size={22} className="text-red-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">{c.label}</p>
                  <p className="text-white font-semibold">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Working hours */}
            <div className="sm:col-span-2 p-6 border border-red-500/20 rounded-2xl bg-white/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={22} className="text-red-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Режим работы</p>
                  <p className="text-white font-semibold">Пн–Пт: 9:00 – 19:00</p>
                  <p className="text-gray-400 text-sm mt-1">Заявки принимаем круглосуточно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-red-500/20 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.372295814498!2d37.61748!3d55.75583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1680000000000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
