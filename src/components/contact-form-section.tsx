import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

export function ContactFormSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-orbitron">Обсудим проект?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Оставьте заявку — свяжемся в течение 1 рабочего дня
          </p>
        </div>

        {sent ? (
          <div className="text-center py-16 border border-red-500/20 rounded-2xl bg-white/5">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
            <p className="text-gray-400">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-red-500/20 rounded-2xl p-8 bg-white/5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-medium">Ваше имя *</label>
                <Input
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-white/10 border-red-500/20 text-white placeholder:text-gray-500 focus:border-red-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-medium">Телефон или Email *</label>
                <Input
                  placeholder="+7 (999) 000-00-00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="bg-white/10 border-red-500/20 text-white placeholder:text-gray-500 focus:border-red-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-300 font-medium">Расскажите о задаче</label>
              <Textarea
                placeholder="Коротко опишите, что нужно сделать..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="bg-white/10 border-red-500/20 text-white placeholder:text-gray-500 focus:border-red-500 resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-4"
            >
              Отправить заявку
            </Button>
            <p className="text-center text-gray-500 text-sm">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
