'use client';

import { useRef } from 'react';

const MusicPlayer=()=> {
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current?.play();
    };

    const pauseAudio = () => {
        audioRef.current?.pause();
    };

    return (
        <div className="flex flex-col items-center gap-3">
            <audio ref={audioRef} src="/audio/Moon-Waltz.mp3" preload="auto" />
            
            <button onClick={playAudio} className="bg-green-500 text-white px-4 py-2 rounded">
                Play
            </button>
            <button onClick={pauseAudio} className="bg-red-500 text-white px-4 py-2 rounded">
                Pause
            </button>
        </div>
    );
}
export default MusicPlayer