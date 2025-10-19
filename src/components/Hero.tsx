import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Desbloqueie Seu Potencial Com{" "}
          <span className="text-primary glow-text">Conhecimento Gratuito</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Baixe nosso guia abrangente e descubra estratégias que transformarão sua abordagem para o sucesso.
        </p>

        <div className="pt-4">
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="text-lg px-8 py-6 glow-border hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.5)] transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Baixe Seu Ebook Gratuito
          </Button>
        </div>

        <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Acesso Instantâneo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Sem Cartão de Crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>100% Gratuito</span>
          </div>
        </div>
      </div>
    </section>
  );
};
