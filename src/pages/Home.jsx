import Hero from '../components/Hero.jsx'
import SermonCard from '../components/SermonCard.jsx'
import EventCard from '../components/EventCard.jsx'
import AboutPage from '../components/AboutPage.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPage />
      <Testimonials />
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-4">Latest Sermons</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <SermonCard title="Walking by Faith" speaker="Rev. John Doe" date="Aug 11, 2025" url="https://www.youtube.com/" />
          <SermonCard title="The Power of Prayer" speaker="Rev. John Doe" date="Aug 4, 2025" url="https://www.youtube.com/" />
          <SermonCard title="Hope in Christ" speaker="Rev. John Doe" date="Jul 28, 2025" url="https://www.youtube.com/" />
        </div>
      </section>
      <section className="container pb-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <EventCard title="Youth Worship Night" date="Sep 6, 2025" location="Main Auditorium" description="Join us for a night of worship and prayer." />
          <EventCard title="Community Outreach" date="Sep 14, 2025" location="East Legon" description="Sharing food and the gospel." />
          <EventCard title="Baptism Service" date="Sep 21, 2025" location="Church Grounds" description="Sign up after service." />
        </div>
      </section>
    </div>
  )
}
