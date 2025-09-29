import { motion } from "framer-motion";

export default function Sermons() {
  const sermons = [
    {
      title: "Grace Abounds",
      speaker: "Rev. John Doe",
      date: "Aug 18, 2025",
      url: "https://www.youtube.com/watch?v=imY9Yv1LRYI",
    },
    {
      title: "Overcoming Fear",
      speaker: "Rev. Jane Smith",
      date: "Aug 10, 2025",
      url: "https://www.youtube.com/watch?v=abc123XYZ",
    },
    {
      title: "Living in Purpose",
      speaker: "Rev. John Doe",
      date: "Aug 3, 2025",
      url: "https://www.youtube.com/watch?v=xyz789ABC",
    },
  ];

  // Extract YouTube ID
  const getYoutubeId = (url) => {
    const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen py-16 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-14"
      >
        Latest{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
          Sermons
        </span>
      </motion.h1>

      {/* Sermons Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {sermons.map((s, i) => {
          const videoId = getYoutubeId(s.url);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg bg-neutral-800 border border-neutral-700 hover:shadow-blue-600/40 transition-all"
            >
              {/* Embedded YouTube Video */}
              {videoId ? (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={s.title}
                    className="w-full h-56 md:h-64 lg:h-48"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-300">
                  No Video Available
                </div>
              )}

              {/* Info */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1 hover:text-blue-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-400">{s.speaker}</p>
                <p className="text-xs text-neutral-500">{s.date}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
