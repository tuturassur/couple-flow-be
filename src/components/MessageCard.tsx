import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface MessageCardProps {
  id: string;
  content: string;
  author: string;
  timestamp: Date;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const MessageCard = ({ id, content, author, timestamp, onEdit, onDelete }: MessageCardProps) => {
  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <p className="text-foreground text-lg leading-relaxed mb-3">{content}</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-medium text-primary">{author}</span>
            <span>•</span>
            <span>{timestamp.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(id)}
            className="text-muted-foreground hover:text-primary hover:bg-primary/10"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(id)}
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
