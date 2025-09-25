export default function Sermons() {
  const sermons = [
    { 
      title: 'Grace Abounds', 
      speaker: 'Rev. John Doe', 
      date: 'Aug 18, 2025', 
      url: 'https://www.youtube.com/watch?v=imY9Yv1LRYI&list=RDimY9Yv1LRYI&start_radio=1' 
    },
    { 
      title: 'Overcoming Fear', 
      speaker: 'Rev. Jane Smith', 
      date: 'Aug 10, 2025', 
      url: 'https://www.youtube.com/watch?v=abc123XYZ' 
    },
    { 
      title: 'Living in Purpose', 
      speaker: 'Rev. John Doe', 
      date: 'Aug 3, 2025', 
      url: 'https://www.youtube.com/watch?v=xyz789ABC' 
    },
  ]

  // Function to extract YouTube video ID from URL
  const getYoutubeId = (url) => {
    const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Sermons</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {sermons.map((s, i) => {
          const videoId = getYoutubeId(s.url);
          const thumbnail = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : "https://via.placeholder.com/320x180?text=No+Thumbnail";

          return (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail with Play Overlay */}
              <div className="relative">
                <img src={thumbnail} alt={s.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
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
                <div className="font-semibold text-lg">{s.title}</div>
                <div className="text-sm text-gray-600">{s.speaker}</div>
                <div className="text-xs text-gray-500">{s.date}</div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
