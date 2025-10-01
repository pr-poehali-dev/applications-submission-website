import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: ''
  });

  const products = [
    {
      id: 1,
      name: 'Synthetic 5W-30',
      price: '1 200 ₽',
      viscosity: '5W-30',
      type: 'Синтетическое',
      volume: '4л'
    },
    {
      id: 2,
      name: 'Semi-Synthetic 10W-40',
      price: '850 ₽',
      viscosity: '10W-40',
      type: 'Полусинтетическое',
      volume: '4л'
    },
    {
      id: 3,
      name: 'Mineral 15W-40',
      price: '600 ₽',
      viscosity: '15W-40',
      type: 'Минеральное',
      volume: '4л'
    },
    {
      id: 4,
      name: 'Full Synthetic 0W-20',
      price: '1 500 ₽',
      viscosity: '0W-20',
      type: 'Синтетическое',
      volume: '4л'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({ name: '', phone: '', product: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Motor Oil Store</h1>
            <a href="#order" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Icon name="Phone" size={20} />
              <span className="font-medium">+7 (800) 555-35-35</span>
            </a>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Качественные моторные масла
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональные решения для вашего автомобиля. Доставка по всей России.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#order">
                Оставить заявку
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Каталог продукции
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square bg-secondary/30 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Droplet" size={48} className="text-primary" />
                </div>
                
                <h4 className="font-semibold text-lg mb-2 text-foreground">{product.name}</h4>
                
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <p>Вязкость: {product.viscosity}</p>
                  <p>Тип: {product.type}</p>
                  <p>Объём: {product.volume}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button 
                    size="sm"
                    onClick={() => {
                      setFormData({ ...formData, product: product.name });
                      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Заказать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Качество</h4>
              <p className="text-muted-foreground">Только сертифицированная продукция от проверенных производителей</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Доставка</h4>
              <p className="text-muted-foreground">Быстрая доставка по всей России в течение 1-3 дней</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HeadphonesIcon" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Поддержка</h4>
              <p className="text-muted-foreground">Консультация специалистов и помощь в выборе масла</p>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
              Оставьте заявку
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Заполните форму и наш менеджер свяжется с вами в течение 5 минут
            </p>
            
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="product">Интересующий товар</Label>
                  <Input
                    id="product"
                    placeholder="Например: Synthetic 5W-30"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h4 className="font-bold text-lg mb-4">Motor Oil Store</h4>
              <p className="text-muted-foreground text-sm">
                Профессиональные моторные масла для вашего автомобиля
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-35-35
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@motoroil.store
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, д. 1
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Motor Oil Store. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
