import React from "react";

const ProfileImage = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png"
        alt="img"
        style={{
          height: 150,
          width: 150,
          borderRadius: "50%",
          position:"absolute",
          top:200,
          left:680
        }}
      />
    </div>
  );
};

export default ProfileImage;
