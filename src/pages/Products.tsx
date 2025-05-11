
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products, ProductCategory } from '../data/products';
import ProductCard from '@/components/ProductCard';
import AnimatedSection from '@/components/AnimatedSection';

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category') as ProductCategory | null;

  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(
    categoryParam || 'all'
  );

  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'ui-kit', label: 'UI Kits' },
    { value: 'component', label: 'Components' },
    { value: 'dashboard', label: 'Dashboards' },
    { value: 'icon-pack', label: 'Icon Packs' },
    { value: 'template', label: 'Templates' },
    { value: 'tool', label: 'Tools' }
  ];

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === activeCategory)
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-4 text-center">Our Products</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore our collection of premium digital assets designed to elevate your development workflow.
        </p>
      </AnimatedSection>

      {/* Category Filter */}
      <AnimatedSection delay={0.2}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value as ProductCategory | 'all')}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category.value
                  ? 'bg-udbudo-primary text-background'
                  : 'bg-secondary text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index % 4 * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;
