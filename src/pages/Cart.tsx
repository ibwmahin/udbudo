
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/sonner";
import AnimatedSection from '@/components/AnimatedSection';

const Cart = () => {
  const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success("This would proceed to checkout in a real store!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center">
        <AnimatedSection className="text-center">
          <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
          <p className="text-muted-foreground mb-8">
            Your cart is currently empty.
          </p>
          <Button asChild className="bg-udbudo-primary hover:bg-udbudo-primary/80 text-background">
            <Link to="/products">Browse Products</Link>
          </Button>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-4 text-center">Your Cart</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Review your items before checkout.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-xl overflow-hidden">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 flex flex-col sm:flex-row gap-4 items-center ${
                    index !== cartItems.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className="sm:w-24 h-24 overflow-hidden rounded-lg bg-muted/30">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow">
                    <h3 className="font-semibold mb-1">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.product.shortDescription}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="mr-2">Qty: {item.quantity}</span>
                        {item.product.discountPrice ? (
                          <div className="flex items-center gap-2">
                            <span className="font-bold">${item.product.discountPrice}</span>
                            <span className="text-sm text-muted-foreground line-through">${item.product.price}</span>
                          </div>
                        ) : (
                          <span className="font-bold">${item.product.price}</span>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-udbudo-primary hover:text-red-500"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              
              <div className="border-t border-white/10 pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <Button
                className="w-full bg-udbudo-primary hover:bg-udbudo-primary/80 text-background"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
              
              <div className="flex justify-between gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <Link to="/products">Continue Shopping</Link>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Cart;
