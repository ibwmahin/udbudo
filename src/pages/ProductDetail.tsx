
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import AnimatedSection from '@/components/AnimatedSection';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id) : [];

  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Back Button */}
      <AnimatedSection>
        <Button 
          variant="ghost" 
          className="mb-8 hover:bg-muted/20"
          onClick={() => navigate(-1)}
        >
          ← Back to Products
        </Button>
      </AnimatedSection>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatedSection direction="right">
          <div className="glass rounded-xl overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover object-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {product.discountPrice && (
              <span className="absolute top-4 right-4 bg-udbudo-primary px-3 py-1.5 text-sm font-medium rounded text-background">
                Sale
              </span>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left">
          <div className="flex flex-col h-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-2 py-1 bg-muted text-xs rounded-full">{product.category}</span>
              {product.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-muted/50 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {product.description}
            </p>

            <div className="mt-auto">
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-udbudo-primary mr-2">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-8">
                {product.discountPrice ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">${product.discountPrice}</span>
                    <span className="text-lg text-muted-foreground line-through">${product.price}</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold">${product.price}</span>
                )}
              </div>

              <Button 
                size="lg" 
                className="w-full bg-udbudo-primary hover:bg-udbudo-primary/80 text-background"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-24">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
