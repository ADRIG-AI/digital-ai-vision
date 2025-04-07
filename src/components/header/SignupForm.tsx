
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SignupFormProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const SignupForm = ({ onClose, onSwitchToLogin }: SignupFormProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-adrig-blue">Create an Account</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
            <input
              type="text"
              id="first-name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
            <input
              type="text"
              id="last-name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              placeholder="Doe"
            />
          </div>
        </div>
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
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-adrig-blue focus:ring-adrig-blue border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the <a href="#" className="text-adrig-blue hover:underline">Terms</a> and <a href="#" className="text-adrig-blue hover:underline">Privacy Policy</a>
          </label>
        </div>
        <Button className="w-full bg-adrig-blue text-white hover:bg-blue-900">
          Sign up
        </Button>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <button
            type="button"
            className="text-sm text-adrig-blue hover:underline"
            onClick={onSwitchToLogin}
          >
            Log in
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

export default SignupForm;
