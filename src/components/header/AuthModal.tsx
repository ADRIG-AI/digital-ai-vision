
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthModalProps {
  showLoginForm: boolean;
  showSignupForm: boolean;
  onClose: () => void;
  switchToLogin: () => void;
  switchToSignup: () => void;
}

const AuthModal = ({ 
  showLoginForm, 
  showSignupForm, 
  onClose,
  switchToLogin,
  switchToSignup
}: AuthModalProps) => {
  if (!showLoginForm && !showSignupForm) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        {showLoginForm && (
          <LoginForm onClose={onClose} onSwitchToSignup={switchToSignup} />
        )}
        
        {showSignupForm && (
          <SignupForm onClose={onClose} onSwitchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
