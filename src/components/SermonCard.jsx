import { useState } from "react";
import ReactPlayer from "react-player"; // ✅ fixed import
import { motion, AnimatePresence } from "framer-motion";

export default function SermonCard({ title, speaker, date, url }) {
  const [isOpen, setIsOpen] = useState(false);

  // Extract YouTube Video ID
  const getYoutubeId = (url) => {
    const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(url);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "https://via.placeholder.com/320x180?text=No+Thumbnail";

  return (
    <>
      {/* Sermon Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-blue-600/40 transition"
        onClick={() => setIsOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{speaker}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </motion.div>

      {/* Modal Player */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-11/12 max-w-3xl bg-neutral-900 rounded-lg overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <div className="aspect-video">
                <ReactPlayer
                  url={url}
                  controls
                  playing
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm">{speaker}</p>
                <p className="text-xs text-gray-400">{date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
