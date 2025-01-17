import { useState } from "react";
import "./vidcompanent.css";
import videoFile from "../../images/videoplayback.mp4"; 

export default function VideoCompanent() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="vidComp">
            {!isPlaying ? (
                <div className="video-preview" onClick={() => setIsPlaying(true)}>
                    <video 
                        className="video-thumbnail" 
                        src={videoFile} 
                        muted 
                        playsInline
                        preload="metadata"
                    />
                    <div className="play-button">▶</div>
                </div>
            ) : (
                <video controls autoPlay className="video-player">
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}
