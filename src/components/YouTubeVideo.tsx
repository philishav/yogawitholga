import { Play, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  description: string;
  thumbnail?: string;
}

const YouTubeVideo = ({ videoId, title, description, thumbnail }: YouTubeVideoProps) => {
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 group">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={thumbnail || defaultThumbnail} 
            alt={title}
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <Button
              size="lg"
              onClick={() => window.open(videoUrl, '_blank')}
              className="bg-white/90 hover:bg-white text-primary rounded-full p-6 shadow-strong hover:scale-110 transition-all duration-300"
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </Button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-heading font-semibold mb-3 text-foreground line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.open(videoUrl, '_blank')}
          >
            Смотреть на YouTube
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default YouTubeVideo;