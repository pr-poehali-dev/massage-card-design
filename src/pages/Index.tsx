import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border-2 border-accent/20 shadow-2xl overflow-hidden">
        <div className="p-12 text-center space-y-8">
          <div className="space-y-2">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Sparkles" className="text-accent" size={32} />
            </div>
            
            <h1 className="text-5xl font-light text-primary tracking-wide">
              Анна Петрова
            </h1>
            
            <div className="h-px w-24 mx-auto bg-accent/40 my-6"></div>
            
            <p className="text-xl text-secondary font-light tracking-widest uppercase">
              Массажист
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <a 
              href="tel:+79001234567" 
              className="flex items-center justify-center gap-3 text-lg text-foreground hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Icon name="Phone" className="text-accent" size={20} />
              </div>
              <span className="font-light">+7 900 123-45-67</span>
            </a>
          </div>

          <div className="pt-4 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </Card>
    </div>
  );
};

export default Index;
