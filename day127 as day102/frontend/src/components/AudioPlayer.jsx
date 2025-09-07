import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IoPlay,
  IoPause,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoVolumeHigh,
  IoVolumeMute,
  IoClose,
} from 'react-icons/io5';

// Helper function to format time from seconds to MM:SS
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const AudioPlayer = ({ song, isPlaying, setIsPlaying, onNext, onPrev, onClose }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);

  // Effect to handle play/pause logic
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(error => console.error("Error playing audio:", error));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, song]);
  
  // Effect to update volume
  useEffect(() => {
    if(audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(19px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose} 
      >
        <motion.div
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="relative w-full max-w-md bg-neutral-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 text-white border border-white/10"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the player
        >
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors">
             <IoClose size={34} />
          </button>

          {/* Album Art Placeholder */}
          <div className="aspect-square bg-neutral-700 rounded-lg mb-6 flex items-center justify-center shadow-lg">
            <video src="./public/video.mp4" className="w-full h-full object-cover" muted autoPlay loop></video>
          </div>

          {/* Song Info */}
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold">{song.title}</h3>
            <p className="text-neutral-400">{song.artist}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-neutral-600 rounded-lg appearance-none cursor-pointer range-thumb"
            />
            <div className="flex justify-between text-xs text-neutral-400 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>-{formatTime(duration - currentTime)}</span>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <button onClick={onPrev} className="text-neutral-400 hover:text-white transition-colors">
              <IoPlaySkipBack size={28} />
            </button>
            <button
              onClick={togglePlayPause}
              className=" text-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform"
            >
              {isPlaying ? <IoPause size={32} /> : <IoPlay size={32} />}
            </button>
            <button onClick={onNext} className="text-neutral-400 hover:text-white transition-colors">
              <IoPlaySkipForward size={28} />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-3">
             {volume > 0 ? <IoVolumeHigh /> : <IoVolumeMute />}
             <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full h-1 bg-neutral-600 rounded-lg appearance-none cursor-pointer range-thumb-vol"
            />
          </div>

          <audio
            ref={audioRef}
            src={song.audio}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={onNext} // Automatically play next song
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AudioPlayer;