import ProductCard from './ProductCard';

const mockProducts = [
  {
    id: 1,
    name: 'Retro Pop Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop&crop=center',
    isNew: true,
    variant: 'yellow' as const
  },
  {
    id: 2,
    name: 'Neon Dreams Hoodie',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=600&fit=crop&crop=center',
    isNew: false,
    variant: 'cyan' as const
  },
  {
    id: 3,
    name: 'Comic Strip Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop&crop=center',
    isNew: true,
    variant: 'yellow' as const
  },
  {
    id: 4,
    name: 'Pop Art Sneakers',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop&crop=center',
    isNew: false,
    variant: 'cyan' as const
  },
  {
    id: 5,
    name: 'Vibrant Vibes Dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&crop=center',
    isNew: true,
    variant: 'yellow' as const
  },
  {
    id: 6,
    name: 'Boom Graphic Tee',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&h=600&fit=crop&crop=center',
    isNew: false,
    variant: 'cyan' as const
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-pop-heading mb-4">
            Featured Collection
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
            Rock these trendy pieces that'll make you stand out from the crowd! 
            Each item is designed to bring out your bold, expressive side.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="btn-pop-cyan">All Items</button>
          <button className="btn-pop-orange">New Arrivals</button>
          <button className="btn-pop-pink">Best Sellers</button>
          <button className="btn-pop-cyan">Sale</button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-pop-orange text-xl px-12 py-4">
            Load More Awesome Stuff!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;