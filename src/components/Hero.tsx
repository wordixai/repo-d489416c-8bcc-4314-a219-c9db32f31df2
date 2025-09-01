import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-pop pop-dots-large flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-bounce-in">
            <h1 className="text-pop-heading">
              Shop the 
              <span className="block text-pink-400">Pop Art</span>
              <span className="block text-cyan-400">Vibe!</span>
            </h1>
            
            <p className="text-lg font-body text-black max-w-lg mx-auto lg:mx-0">
              Express your unique style with our bold, vibrant fashion collection. 
              From retro tees to statement accessories - we've got the look that screams YOU!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-pop-orange text-xl px-8 py-4">
                Shop Now
              </Button>
              <Button className="btn-pop-cyan text-xl px-8 py-4">
                View Collections
              </Button>
            </div>

            {/* Promo Banner */}
            <div className="speech-bubble inline-block animate-float">
              <p className="font-heading font-bold text-lg text-pink-500">
                BOOM! 20% Off Everything! 💥
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop&crop=center"
                alt="Pop Art Fashion Model"
                className="w-96 h-96 object-cover comic-border pop-shadow-yellow animate-float rounded-lg"
              />
              
              {/* Comic Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 comic-border rounded-full w-16 h-16 flex items-center justify-center animate-bounce-in">
                <span className="font-heading font-bold text-xl">POW!</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-cyan-400 comic-border rounded-full w-20 h-20 flex items-center justify-center animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                <span className="font-heading font-bold text-lg">FRESH!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;