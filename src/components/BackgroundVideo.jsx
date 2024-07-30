import React, { useEffect, useRef } from 'react';
import './BackgroundVideo.css';
import videoSrc from '../assets/bg.MOV'

const BackgroundVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleUserInteraction = () => {
            if (videoRef.current) {
                videoRef.current.play().catch(error => {
                    console.log('Failed to play video:', error);
                });
            }
        };

        document.addEventListener('click', handleUserInteraction, { once: true });

        return () => {
            document.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    return (
        <div className="video-container">
            <video
                className="background-video"
                ref={videoRef}
                src={videoSrc}
                autoPlay
                loop
                muted={false}
                playsInline
            />
        </div>
    );
};

export default BackgroundVideo;
