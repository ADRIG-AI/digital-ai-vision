
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LoginFormProps {
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginForm = ({ onClose, onSwitchToSignup }: LoginFormProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-adrig-blue">Login</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            placeholder="••••••••"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-adrig-blue focus:ring-adrig-blue border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-adrig-blue hover:underline">
            Forgot password?
          </a>
        </div>
        <Button className="w-full bg-adrig-blue text-white hover:bg-blue-900">
          Log in
        </Button>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <button
            type="button"
            className="text-sm text-adrig-blue hover:underline"
            onClick={onSwitchToSignup}
          >
            Sign up
          </button>
        </div>
      </form>
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        <X size={24} />
      </button>
    </>
  );
};

export default LoginForm;
