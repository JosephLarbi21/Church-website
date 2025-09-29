import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ChatbotWidget from "./components/ChatbotWidget.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx"; // ✅ import it
import Home from "./pages/Home.jsx";
import Sermons from "./pages/Sermons.jsx";
import Events from "./pages/Events.jsx";
import Giving from "./pages/Giving.jsx";
import Contact from "./assets/components/Contact.jsx"; // ✅ fixed path
import Ministries from "./pages/Ministries.jsx";
import BibleStudies from "./pages/BibleStudies.jsx";
import AboutPage from "./components/AboutPage.jsx";
import Service from "./components/Service.jsx";
import Livestream from "./components/LiveStream.jsx";
import MoreAboutUs from "./components/MoreAboutUs.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Navbar always visible */}
      <Navbar />
      <ScrollProgress /> {/* ✅ Scroll bar at the top */}

      {/* ✅ Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/moreaboutus" element={<MoreAboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/livestream" element={<Livestream />} />
          <Route path="/bible-studies" element={<BibleStudies />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Catch-all (404 Page) */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-20 text-2xl">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
      </main>

      {/* ✅ Footer + Chatbot */}
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
