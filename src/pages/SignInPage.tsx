import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage:React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <SignIn path="/sign-in" routing="path" />
    </div>
  </div>
);

export default SignInPage;