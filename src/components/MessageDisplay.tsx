import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface MessageDisplayProps {
  content: string;
  timestamp: Date;
}

export const MessageDisplay = ({ content, timestamp }: MessageDisplayProps) => {
  if (!content) {
    return (
      <Card className="p-12 text-center bg-card/50 backdrop-blur-sm border-border/50">
        <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground text-lg">
          Aucun message pour le moment. Écrivez votre premier message d'amour !
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-border/50 shadow-xl">
      <div className="flex justify-center mb-6">
        <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
      </div>
      <p className="text-foreground text-2xl leading-relaxed text-center mb-6 font-light">
        "{content}"
      </p>
      <div className="text-center text-sm text-muted-foreground">
        Dernière modification : {timestamp.toLocaleDateString('fr-FR', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        })}
      </div>
    </Card>
  );
};
