















export default function Contact() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Contact & Location</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="space-y-3">
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Your Name" />
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" type="email" />
          <textarea className="w-full border rounded-lg px-3 py-2 h-32" placeholder="Message"></textarea>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Send</button>
        </form>
       <iframe 
       title="Location"
          className="w-full h-72 rounded-xl border"
          loading="lazy"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63532.85529223045!2d-0.32488247832033285!3d5.596033700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99369e7b0b21%3A0xb17cb1f62c26f5d6!2sDream%20House%20Chapel%20INT!5e0!3m2!1sen!2sgh!4v1756094097023!5m2!1sen!2sgh" 
       ></iframe>
       
      </div>
    </section>
  )
}
