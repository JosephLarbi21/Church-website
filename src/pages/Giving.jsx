export default function Giving() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Giving</h1>
      <p className="text-gray-700 max-w-2xl">
        Your generosity fuels ministry impact. You can give via Mobile Money, bank transfer, or in person.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">Mobile Money</h3>
          <p className="text-sm text-gray-600">MTN MoMo: 024 000 0000 (Dream House Chapel)</p>
          <p className="text-sm text-gray-600">Vodafone Cash: 020 000 0000</p>
        </div>
        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">Bank Transfer</h3>
          <p className="text-sm text-gray-600">Bank: Example Bank Ghana</p>
          <p className="text-sm text-gray-600">Account: 0000000000</p>
          <p className="text-sm text-gray-600">Branch: Accra</p>
        </div>
      </div>
    </section>
  )
}
