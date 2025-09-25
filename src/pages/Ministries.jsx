export default function Ministries() {
  const items = [
     ['Men\'s Fellowship','Discipleship and accountability.'],
     ['Women\'s Fellowship','Prayer, mentorship and outreach.'],
     ['Youth','Equipping young people to follow Jesus.'],
    ['Children\'s Ministry','Raising the next generation in Christ.'],
    ['Music Ministry','Leading worship with excellence.'],
  ]
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Ministries</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(([name, desc]) => (
          <div key={name} className="border rounded-xl p-4">
            <div className="font-semibold">{name}</div>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
