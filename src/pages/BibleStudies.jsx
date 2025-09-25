export default function BibleStudies() {
  const plans = [
    { title: 'Gospel of John (4 weeks)', details: 'Read 5 chapters per week with memory verses.' },
    { title: 'Psalms of Comfort (2 weeks)', details: 'Selected Psalms for encouragement.' },
    { title: 'Acts of the Apostles (6 weeks)', details: 'Witness the early church in action.' },
  ]
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Bible Studies</h1>
      <div className="space-y-3">
        {plans.map((p) => (
          <div key={p.title} className="border rounded-xl p-4">
            <div className="font-semibold">{p.title}</div>
            <p className="text-sm text-gray-600">{p.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
