export default function SermonCard({ title, speaker, date, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="block border rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{speaker}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </a>
  )
}
