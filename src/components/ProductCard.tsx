
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="glass rounded-xl overflow-hidden h-full flex flex-col"
    >
      <div className="overflow-hidden h-48 relative">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.discountPrice && (
            <span className="bg-udbudo-primary px-2 py-1 text-xs font-medium rounded text-background">
              Sale
            </span>
          )}
          <span className="bg-background/70 backdrop-blur-sm px-2 py-1 text-xs font-medium rounded">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{product.shortDescription}</p>
        
        <div className="flex items-end justify-between mt-auto">
          <div>
            {product.discountPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">${product.discountPrice}</span>
                <span className="text-sm text-muted-foreground line-through">${product.price}</span>
              </div>
            ) : (
              <span className="text-lg font-bold">${product.price}</span>
            )}
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" asChild>
              <Link to={`/product/${product.id}`}>Details</Link>
            </Button>
            <Button 
              size="sm" 
              className="bg-udbudo-primary hover:bg-udbudo-primary/80"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
