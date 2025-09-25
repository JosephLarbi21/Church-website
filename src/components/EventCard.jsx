export default function EventCard({ title, date, location, description }) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{date} &middot; {location}</p>
      {description && <p className="text-sm mt-2">{description}</p>}
    </div>
  )
}
