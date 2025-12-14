import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border border-accent/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent"></div>
        
        <div className="p-16 text-center space-y-10 relative">
          <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-accent/40"></div>
          <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-accent/40"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-accent/40"></div>
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-accent/40"></div>
          
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center border-2 border-accent/30 shadow-lg">
              <Icon name="Sparkles" className="text-accent" size={36} />
            </div>
            
            <h1 className="text-6xl font-light text-primary tracking-wider" style={{ letterSpacing: '0.05em' }}>
              Анна Петрова
            </h1>
            
            <div className="flex items-center justify-center gap-3 my-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50"></div>
            </div>
            
            <p className="text-2xl text-accent font-light tracking-[0.3em] uppercase">
              Массажист
            </p>
          </div>

          <div className="pt-8 space-y-4">
            <a 
              href="tel:+79001234567" 
              className="flex items-center justify-center gap-4 text-xl text-foreground hover:text-accent transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300 border border-accent/20 shadow-md">
                <Icon name="Phone" className="text-accent" size={22} />
              </div>
              <span className="font-light tracking-wide">+7 900 123-45-67</span>
            </a>
          </div>

          <div className="pt-6 flex justify-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent/40 shadow-sm"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-sm"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-accent/40 shadow-sm"></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;