import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Download, CheckCircle2 } from "lucide-react";

interface LeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LeadForm = ({ open, onOpenChange }: LeadFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log("Lead captured:", formData);
    setIsSubmitted(true);
    
    toast({
      title: "Success!",
      description: "Check your email for the download link",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "" });
      onOpenChange(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] glow-border">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Baixe Seu Ebook Gratuito</DialogTitle>
              <DialogDescription className="text-base pt-2">
                insira seu nome e e-mail para receber seu ebook gratuito.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  placeholder="João Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-muted focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Endereço de Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="joao.silva@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-muted focus:border-primary"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Baixar Ebook
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-primary animate-in zoom-in duration-500" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl">Obrigado!</DialogTitle>
              <DialogDescription className="text-base pt-2">
                Seu ebook está a caminho da sua caixa de entrada. Verifique seu email para o link de download.
              </DialogDescription>
            </DialogHeader>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
