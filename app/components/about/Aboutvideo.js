import React from "react";

const AboutVideo = () => {
    return (
        <div className="w-full h-full pl-5 pr-5 mb-[50px] relative overflow-hidden xl:pl-[400px] xl:pr-[400px] xl:mb-[100px]">
            <video
                className="w-full h-full object-cover"
                src="/video/about-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    );
};

export default AboutVideo;