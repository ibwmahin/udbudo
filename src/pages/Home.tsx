
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { products, ProductCategory } from '../data/products';
import AnimatedSection from '@/components/AnimatedSection';
import ProductCard from '@/components/ProductCard';

const Home = () => {
  const featuredCategories: { name: string; slug: ProductCategory; description: string }[] = [
    { 
      name: 'UI Kits', 
      slug: 'ui-kit', 
      description: 'Premium UI component libraries with dark mode and glassmorphism effects'
    },
    { 
      name: 'Dashboards', 
      slug: 'dashboard', 
      description: 'Complete dashboard solutions for monitoring and analytics'
    },
    { 
      name: 'Icon Packs', 
      slug: 'icon-pack', 
      description: 'Extensive collections of developer-focused icons in multiple formats'
    },
    { 
      name: 'Templates', 
      slug: 'template', 
      description: 'Ready-to-use templates for portfolios, landing pages, and apps'
    }
  ];

  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-udbudo-dark to-background opacity-90" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.15),transparent_40%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(30,174,219,0.15),transparent_40%)]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient">Build. Sell. Ship.</span> <br />
              <span className="text-white">Udbudo.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Premium digital assets for developers. Build better applications with our UI kits, components, and templates designed for the modern web.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-udbudo-primary hover:bg-udbudo-primary/80 text-background">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Premium Assets</span> for Developers
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <AnimatedSection key={category.slug} delay={index * 0.1}>
                <Link to={`/products?category=${category.slug}`} className="block h-full">
                  <div className="glass rounded-xl p-6 h-full glass-hover">
                    <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <span className="text-udbudo-primary text-sm flex items-center">
                      Explore {category.name} →
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-gradient-to-b from-background to-udbudo-dark/30">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Discover our most popular digital assets to elevate your development workflow and create stunning applications.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="flex justify-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Udbudo Section */}
      <section className="section">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">Why Udbudo?</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We're on a mission to help developers build better, faster, and more beautiful applications.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="text-xl font-semibold mb-3">Built by Developers</h3>
                <p className="text-sm text-muted-foreground">
                  Every product is created by developers who understand the challenges and needs of modern web development.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="text-xl font-semibold mb-3">Focus on Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Our products are optimized for speed and performance, ensuring your applications run smoothly.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
                <p className="text-sm text-muted-foreground">
                  We believe great functionality deserves great design. Our products are visually stunning and user-friendly.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section bg-gradient-to-b from-background to-udbudo-dark/30">
        <div className="container mx-auto">
          <div className="glass rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 h-full">
                <div className="h-full w-full bg-udbudo-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-udbudo-primary/20 to-udbudo-dark opacity-90" />
                  <img 
                    src="/placeholder.svg" 
                    alt="Mahin, Founder of Udbudo" 
                    className="w-full h-full object-cover object-center mix-blend-overlay opacity-50"
                  />
                </div>
              </div>

              <div className="md:col-span-3 p-6 md:p-12 flex flex-col justify-center">
                <AnimatedSection>
                  <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
                  <p className="text-muted-foreground mb-6">
                    Udbudo was founded by Mahin, a passionate developer from Bangladesh with a vision to create premium digital products that help developers build amazing applications.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    With years of experience in web development and design, Mahin started Udbudo to fill the gap in high-quality, developer-focused digital assets that combine both functionality and aesthetics.
                  </p>
                  <Button asChild size="sm">
                    <Link to="/about">Learn More About Mahin</Link>
                  </Button>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Development?</h2>
              <p className="text-muted-foreground mb-8">
                Explore our collection of premium digital assets and take your projects to the next level.
              </p>
              <Button asChild size="lg" className="bg-udbudo-primary hover:bg-udbudo-primary/80 text-background">
                <Link to="/products">Browse Products</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
