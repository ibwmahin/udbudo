
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/sonner";

interface AuthProps {
  mode: 'login' | 'signup';
}

const Auth = ({ mode }: AuthProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log authentication attempt
    console.log(`${mode === 'login' ? 'Login' : 'Signup'} attempt:`, {
      email,
      password: '********',
      ...(mode === 'signup' && { name })
    });

    // Simulate form submission
    setTimeout(() => {
      toast.success(
        mode === 'login' 
          ? "Login successful! (This is just a demo)" 
          : "Account created successfully! (This is just a demo)"
      );
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass w-full max-w-md rounded-xl p-8"
      >
        <div className="text-center mb-8">
          <Link to="/">
            <h1 className="text-2xl font-bold text-gradient inline-block mb-4">Udbudo</h1>
          </Link>
          <h2 className="text-2xl font-bold">
            {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className="text-muted-foreground mt-2">
            {mode === 'login' 
              ? 'Enter your credentials to access your account' 
              : 'Fill out the form to create your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'signup' && (
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="bg-muted/50"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="bg-muted/50"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-muted/50"
            />
          </div>

          {mode === 'login' && (
            <div className="flex justify-end">
              <a href="#" className="text-sm text-udbudo-primary hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-udbudo-primary hover:bg-udbudo-primary/80 text-background"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (mode === 'login' ? 'Logging in...' : 'Creating account...') 
              : (mode === 'login' ? 'Log in' : 'Sign up')}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
            <Link
              to={mode === 'login' ? '/signup' : '/login'}
              className="text-udbudo-primary hover:underline"
            >
              {mode === 'login' ? 'Sign up' : 'Log in'}
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
