import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const InstagramPreview = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
      caption: "Morning yoga flow by the ocean 🧘‍♀️"
    },
    {
      id: 2, 
      image: "https://images.unsplash.com/photo-1506629905607-b5f3d6013c0f?w=300&h=300&fit=crop",
      caption: "Strength training for beginners 💪"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=300&fit=crop", 
      caption: "Sunset meditation in Cannes 🌅"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      caption: "Anatomy-based yoga practice ✨"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground">
              Следите за мной в Instagram
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ежедневные тренировки, советы по здоровью и вдохновение в закрытом профиле @body_s_oleil
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-6 rounded-full shadow-medium transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://instagram.com/yoga_olga', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-3" />
              @yoga_olga
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 rounded-full transition-all duration-300"
              onClick={() => window.open('https://instagram.com/body_s_oleil', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-3" />
              @body_s_oleil (Закрытый профиль)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {instagramPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer shadow-soft"
              onClick={() => window.open('https://instagram.com/yoga_olga', '_blank')}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.caption}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{post.caption}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Более 100 девушек уже присоединились к нашему сообществу
          </p>
          <Button 
            variant="secondary"
            size="lg"
            onClick={() => window.open('https://instagram.com/yoga_olga', '_blank')}
            className="px-8 py-4 rounded-full font-semibold"
          >
            Посмотреть все посты
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramPreview;