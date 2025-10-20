import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Bell } from "lucide-react";

interface MessageFormProps {
  onSubmit: (content: string) => void;
  currentMessage?: string;
  onNotify: () => void;
}

export const MessageForm = ({ onSubmit, currentMessage, onNotify }: MessageFormProps) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (currentMessage) {
      setContent(currentMessage);
    }
  }, [currentMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
    }
  };

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="message" className="text-foreground mb-2 block">Notre message d'amour</Label>
          <Textarea
            id="message"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Écrivez un message d'amour à partager..."
            className="min-h-[160px] bg-background/50 border-border resize-none text-lg"
            required
          />
        </div>
        <div className="flex gap-2">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Heart className="mr-2 h-4 w-4" />
            Sauvegarder
          </Button>
          <Button
            type="button"
            onClick={onNotify}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <Bell className="mr-2 h-4 w-4" />
            Notifier
          </Button>
        </div>
      </form>
    </Card>
  );
};
