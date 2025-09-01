import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  variant?: 'yellow' | 'cyan';
}

const ProductCard = ({ id, name, price, image, isNew = false, variant = 'yellow' }: ProductCardProps) => {
  return (
    <div className={`product-card variant-${variant} group`}>
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* New Badge */}
        {isNew && (
          <div className="absolute top-2 left-2 bg-pink-400 comic-border px-3 py-1 rotate-12 animate-bounce-in">
            <span className="font-heading font-bold text-white text-sm">NEW!</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Button className="btn-pop-cyan opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-heading font-bold text-lg text-black group-hover:text-pink-400 transition-colors">
          {name}
        </h3>
        <p className="text-pop-emphasis text-xl">
          ${price}
        </p>
      </div>

      {/* Add to Cart Button */}
      <Button className="w-full mt-4 btn-pop-pink">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;