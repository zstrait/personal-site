import { useState, useRef } from 'react';

function PhotosPage() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <>
            <div className="photography-page page">
                <div className="camcorder-container">
                    <div className="camcorder-backdrop" style={{ position: 'relative' }}>
                        <video
                            ref={videoRef}
                            controls={isPlaying}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            width="100%"
                            height="auto"
                            preload="none"
                            poster="/photos/thumbnail.png"
                            className="camcorder-player"
                            style={{ borderRadius: '8px', cursor: isPlaying ? "url('/cursor/hand1.png') 0 0, auto" : "url('/cursor/point1.png') 0 0, pointer" }}
                            onClick={!isPlaying ? handlePlayClick : undefined}
                        >
                            <source
                                src="https://res.cloudinary.com/dyeom160z/video/upload/Innerspacee_shj2zg.mp4"
                                type="video/mp4"
                            />
                        </video>
                        {!isPlaying && (
                            <div
                                onClick={handlePlayClick}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: "url('/cursor/point1.png') 0 0, pointer",
                                    zIndex: 10,
                                    transform: 'translate(-9px, 0)'
                                }}
                            >
                                <img
                                    src="/buttons/play-button.svg"
                                    alt="Play"
                                    style={{ width: '80px', height: '80px', opacity: 0.9 }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotosPage;
