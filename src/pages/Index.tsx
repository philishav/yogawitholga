import { ArrowDown, Heart, Users, Calendar, Award, Zap, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import InstagramPreview from "@/components/InstagramPreview";
import YouTubeVideo from "@/components/YouTubeVideo";
import PricingSection from "@/components/PricingSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-yoga.jpg";
import olgaPortrait from "@/assets/olga-portrait.jpg";

const Index = () => {
  const workoutTypes = [
    { icon: Zap, name: "СИЛОВЫЕ", description: "акцент на крупные группы мышц" },
    { icon: Target, name: "СТАТИЧЕСКИЕ", description: "акцент на глубокий слой мышц" },
    { icon: Sparkles, name: "СТАТО-ДИНАМИЧЕСКИЕ", description: "работа всего тела" },
    { icon: Heart, name: "ДИНАМИЧЕСКИЕ", description: "работа сердечно-сосудистой системы" },
    { icon: Users, name: "МОБИЛЬНОСТЬ", description: "опорно-двигательный аппарат" },
    { icon: Calendar, name: "РАСТЯЖКА И ГИБКОСТЬ", description: "красивое и здоровое тело" }
  ];

  const benefits = [
    {
      number: "1",
      title: "Умные тренировки",
      description: "Мой опыт преподавания более 10 лет. Все тренировки безопасны и эффективны, потому что основаны на анатомии и физиологии человека."
    },
    {
      number: "2", 
      title: "Обратная связь",
      description: "Индивидуальный разбор видеозаписей упражнений. Регулярные встречи в Zoom по вашим вопросам и разбор упражнений."
    },
    {
      number: "3",
      title: "Тренировки онлайн",
      description: "Не надо никуда ехать. Занятия проходят в формате живой трансляции в реальном времени. Записи доступны в любое время."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            BodySoleil - Солнечное тело
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            ОНЛАЙН ТРЕНИРОВКИ
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Улучшайте свою физическую форму,<br />
            не выходя из дома
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <WhatsAppButton
              phoneNumber="33766102344"
              size="lg"
              className="px-8 py-6 text-lg rounded-full shadow-strong"
            >
              Начать тренировки
            </WhatsAppButton>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full backdrop-blur-sm"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-white/70" />
          </div>
        </div>
      </section>

      {/* About Olga Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img 
                src={olgaPortrait} 
                alt="Olga - Yoga Instructor"
                className="w-full rounded-2xl shadow-strong"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-strong">
                <Award className="w-8 h-8 mb-2" />
                <p className="font-semibold">10+ лет</p>
                <p className="text-sm">опыта</p>
              </div>
            </div>
            
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Профессиональный тренер
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                Привет, меня зовут <span className="text-accent">Ольга!</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Я профессиональный тренер по йоге и умному фитнесу с опытом преподавания более 10 лет.
                </p>
                <p>
                  Живу в солнечных Каннах. Моя миссия - нести людям знание о здоровье через радость и позитив.
                </p>
                <p>
                  За годы жизни и преподавания в разных странах у меня собралось много учеников, которые хотели продолжать практиковать со мной, таким образом родилась <strong className="text-accent">онлайн студия женского здоровья BodySoleil</strong>.
                </p>
                <p>
                  Моя страсть - это изучение тела. Как оно работает и взаимосвязи в нем. Я строю свои тренировки через удивительный мир анатомии и физиологии, благодаря этому мои занятия безопасны и максимально эффективны.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Studio Works */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Как устроена онлайн студия <span className="text-primary">BodySoleil</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Если вы новичок, то я настоятельно рекомендую вам сначала пройти базовый курс и только потом приступать к регулярным тренировкам.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {workoutTypes.map((type, index) => (
              <Card key={index} className="text-center p-8 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                    {type.name}
                  </h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-sunset text-white p-12 rounded-3xl shadow-strong max-w-4xl mx-auto">
              <h3 className="text-3xl font-heading font-bold mb-4">
                БУДЕТ ВСЁ, ЧТОБЫ БЫТЬ ЗДОРОВЫМ И КРАСИВЫМ!
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Красивая осанка, работа с болью в спине, дыхание, МФР, работа с мышцами тазового дна, внимание к внутреннему состоянию, гимнастика для глаз, упражнения для шеи
              </p>
              <WhatsAppButton
                phoneNumber="33766102344"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full"
              >
                Узнать подробнее
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Почему стоит заниматься со мной
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Оставайтесь здоровыми и счастливыми с минимальными затратами времени и бюджета
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  {benefit.number}
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 text-lg px-4 py-2">
              Более 100 девушек прошли мой базовый курс
            </Badge>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramPreview />

      {/* YouTube Videos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Полезные видео на YouTube
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Изучите основы йоги и фитнеса с моими обучающими видео
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <YouTubeVideo
              videoId="DWrRJGLlxng"
              title="Утренняя йога для начинающих"
              description="15-минутная практика для пробуждения тела и ума. Подходит для всех уровней подготовки."
            />
            <YouTubeVideo
              videoId="v7AYKMP6rOE"
              title="Силовая тренировка в домашних условиях"
              description="Эффективная тренировка для укрепления мышц без специального оборудования."
            />
            <YouTubeVideo
              videoId="4vTJHUDB5ak"
              title="Дыхательные практики для релаксации"
              description="Техники дыхания для снятия стресса и улучшения общего самочувствия."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Final CTA & Contact */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Напишите мне в WhatsApp и я погружу вас
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-12 opacity-90">
            в мир осмысленных тренировок
          </p>
          
          <div className="mb-12">
            <WhatsAppButton
              phoneNumber="33766102344"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-xl rounded-full shadow-strong text-green-600 hover:text-green-700"
            >
              Жми на кнопку - WhatsApp
            </WhatsAppButton>
          </div>

          <p className="text-xl opacity-75 mb-8">
            Начните путь к подтянутому телу и крепкому здоровью уже сейчас
          </p>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-6">Контакты</h3>
            <p className="text-lg opacity-90 mb-4">
              Буду рада обратной связи и вашим вопросам
            </p>
            <div className="space-y-2 text-lg">
              <p>WhatsApp: +33 7 66 10 23 44</p>
              <div className="flex justify-center gap-6 mt-6">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://www.facebook.com/olga.yoga.fitness', '_blank')}
                >
                  Facebook
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://instagram.com/yoga_olga', '_blank')}
                >
                  Instagram
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://t.me/yogabali', '_blank')}
                >
                  Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;