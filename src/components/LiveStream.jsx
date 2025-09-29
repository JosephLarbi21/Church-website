import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LiveStream = () => {
  const [isLive, setIsLive] = useState(false);
  const [liveVideoId, setLiveVideoId] = useState(null);

  // ✅ Replace with your real values
  const API_KEY = "YOUR_YOUTUBE_API_KEY";
  const CHANNEL_ID = "YOUR_CHANNEL_ID";

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
        );
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          setIsLive(true);
          setLiveVideoId(data.items[0].id.videoId);
        } else {
          setIsLive(false);
        }
      } catch (err) {
        console.error("Error fetching live status:", err);
      }
    };

    checkLiveStatus();

    // ✅ Re-check every 60 seconds
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center px-6 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-6xl font-bold text-center mb-8"
      >
        Join Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
          Live Service
        </span>
      </motion.h1>

      {/* Stream or Fallback */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg shadow-blue-700/40 border border-blue-600 flex items-center justify-center bg-black"
      >
        {isLive && liveVideoId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1&mute=0`}
            title="Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">
              🔴 We’re not live right now
            </h2>
            <p className="text-neutral-400 mb-6">
              Please check back during our next service, or watch our previous sermons below.
            </p>
            <a
              href="/sermons"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-white 
                         bg-gradient-to-r from-blue-600 to-blue-800 
                         shadow-md hover:shadow-blue-600/40 hover:scale-105 
                         transition-all duration-300"
            >
              Watch Past Sermons
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LiveStream;
