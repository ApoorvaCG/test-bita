import { UserProfile } from "@clerk/clerk-react";

const UserProfilePage = () => {
  return (
    <div className="mx-auto p-16 flex justify-center">
      {/* Improve: Can be customised to follow the consistant UI */}
      <UserProfile appearance={{}} />
    </div>
  );
};

export default UserProfilePage;
