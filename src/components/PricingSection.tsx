import { Check, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WhatsAppButton from "./WhatsAppButton";

const PricingSection = () => {
  const pricingPlans = [
    {
      id: "monthly",
      name: "Один месяц",
      price: "2500",
      currency: "₽",
      description: "Идеально для начинающих",
      features: [
        "3 живых тренировки в неделю",
        "Доступ к записям занятий",
        "Обратная связь от инструктора",
        "Индивидуальный разбор упражнений"
      ],
      popular: false
    },
    {
      id: "quarterly", 
      name: "Три месяца",
      price: "6000",
      currency: "₽",
      description: "Лучшее соотношение цены и качества",
      features: [
        "Все возможности месячного тарифа",
        "Скидка 2000₽",
        "Регулярные встречи в Zoom",
        "Персональные рекомендации",
        "Доступ к эксклюзивным материалам"
      ],
      popular: true
    },
    {
      id: "friend",
      name: "Приведи подругу", 
      price: "2500",
      currency: "₽",
      description: "Первый месяц на двоих",
      features: [
        "Месячная подписка для двух человек",
        "Все возможности обычного тарифа",
        "Мотивация в компании подруги",
        "Групповая поддержка"
      ],
      popular: false,
      special: true
    },
    {
      id: "corporate",
      name: "Корпоративный",
      price: "от 1250",
      currency: "₽ за человека",
      description: "От 5 человек",
      features: [
        "Корпоративные тренировки",
        "Гибкий график занятий",
        "Адаптация под потребности команды",
        "Командообразование через йогу"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Тарифы на абонементы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий тариф и начните путь к здоровому телу уже сегодня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-primary shadow-strong' : 'shadow-medium'
              } ${plan.special ? 'border-accent' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Популярный
                </div>
              )}
              {plan.special && (
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Специальное предложение
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-heading mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.currency}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <WhatsAppButton
                  phoneNumber="33766102344"
                  message={`Привет! Хочу подписаться на тариф "${plan.name}"`}
                  className="w-full"
                  size="lg"
                >
                  Выбрать тариф
                </WhatsAppButton>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 shadow-medium max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-heading font-semibold">Расписание онлайн тренировок</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Понедельник, среда, пятница в <strong>10:00 по МСК</strong>
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Живые тренировки в Instagram</span>
              </div>
              <Badge variant="secondary">Записи доступны 24/7</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;