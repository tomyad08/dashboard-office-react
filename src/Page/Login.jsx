import React from "react";
import VideoBackground from "../Components/Login/video";
import FormLogin from "../Components/Login/FormLogin";

const LoginPage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <VideoBackground />
      <div className="absolute top-0 right-0">
        <FormLogin />
      </div>
    </div>
  );
};
export default LoginPage;
