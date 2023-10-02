import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div>
    <button
      onClick={() => loginWithRedirect()}
      className="bg-white text-cornflower-500 px-4 py-2 rounded-full"
    >
      Login
    </button>
    </div>
  );
};

export default LoginButton;
