import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const videos = [video1, video2];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [videos.length]);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [currentVideo]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />

      <div className="relative max-w-7xl w-full grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Text */}
        <div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm mb-6"
          >
            Welcome to Dream House Chapel International
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          >
            A Place Where
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Faith Comes Alive
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-neutral-300 text-lg max-w-xl"
          >
            Dream House Chapel International is a family of believers
            dedicated to the Word of God, powerful worship, and raising
            people who impact the world through Christ. Here, lives are
            transformed, destinies are discovered, and faith grows stronger
            every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/sermons"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-105 transition font-semibold"
            >
              <PlayCircle size={18} />
              Watch Sermons
            </a>

            <a
              href="/more-about-us"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-semibold"
            >
              Learn More
              <ArrowRight size={18} />
            </a>
          </motion.div>

        </div>

        {/* Right Video Slideshow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl  shadow-xl shadow-blue-600/30">

            <AnimatePresence mode="wait">
              <motion.video
                key={currentVideo}
                ref={videoRef}
                autoPlay
                muted
                playsInline
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                className="w-full h-[260px] sm:h-[360px] lg:h-[500px] object-cover"
              >
                <source src={videos[currentVideo]} type="video/mp4" />
              </motion.video>
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;