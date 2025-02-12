import React from "react";
import webdesign from "../../assets/web-design.png";

interface UserProfileProps {
  user: { id: string; username: string; firstName: string };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="flex bg-white shadow-md rounded-xl p-10 w-full items-center gap-10">
      <img
        src={webdesign}
        alt="Description of the image"
        width={80}
        height={80}
      />
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-3xl font-bold flex gap-2">
          Hello
          <span className="font-extrabold text-purple-600">
            {user ? user.username || user.firstName : "Guest"}!
          </span>
        </h1>
        <p className="text-base text-secondary-color">Manage your tasks here!</p>
      </div>
    </div>
  );
};

export default UserProfile;
