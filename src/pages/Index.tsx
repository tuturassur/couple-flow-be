import { useState } from "react";
import { MessageForm } from "@/components/MessageForm";
import { MessageDisplay } from "@/components/MessageDisplay";
import { Heart, Bell } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-couple.jpg";

interface Message {
  content: string;
  timestamp: Date;
}

const Index = () => {
  const [message, setMessage] = useState<Message>({
    content: "",
    timestamp: new Date(),
  });

  const handleSubmit = (content: string) => {
    setMessage({
      content,
      timestamp: new Date(),
    });
    toast.success("Message sauvegardé avec amour !");
  };

  const handleNotify = () => {
    if (!message.content) {
      toast.error("Aucun message à envoyer");
      return;
    }

    // Simulate notification
    toast.success("Notification envoyée !", {
      description: "Votre partenaire a été notifié de votre message",
      icon: <Bell className="w-4 h-4" />,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <header className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Couple romantique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <Heart className="w-16 h-16 text-primary mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 drop-shadow-lg">
            Notre Histoire d'Amour
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl drop-shadow-md">
            Un espace intime pour partager nos pensées et nos émotions
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Current Message Display */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Notre message du moment
            </h2>
            <MessageDisplay content={message.content} timestamp={message.timestamp} />
          </section>

          {/* Message Form */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Modifier le message
            </h2>
            <MessageForm
              onSubmit={handleSubmit}
              currentMessage={message.content}
              onNotify={handleNotify}
            />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          Fait avec <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> pour nous
        </p>
      </footer>
    </div>
  );
};

export default Index;
