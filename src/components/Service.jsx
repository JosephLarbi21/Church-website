import { motion } from "framer-motion";
import { FaChurch, FaPrayingHands, FaComments, FaFireAlt } from "react-icons/fa"; // ✅ icons

const services = [
  {
    title: "Wisdom Clinic Service",
    day: "Sunday",
    time: "8:30 AM – 12:30 PM",
    description:
      "Our main Sunday gathering where believers receive divine wisdom through spirit-filled worship, prophetic ministration, and the undiluted Word of God.",
    icon: <FaChurch className="text-blue-400 text-4xl mb-4" />,
  },
  {
    title: "Counselling Session",
    day: "Tuesday",
    time: "8:00 AM – 12:00 PM",
    description:
      "One-on-one counselling sessions designed to provide spiritual guidance, deliverance, and encouragement to strengthen your walk with God.",
    icon: <FaComments className="text-blue-400 text-4xl mb-4" />,
  },
  {
    title: "Rising Hour Service",
    day: "Thursday",
    time: "6:30 PM – 8:30 PM",
    description:
      "A powerful midweek service dedicated to prayer, prophetic declarations, and breakthroughs. A night of refreshing in God’s presence.",
    icon: <FaPrayingHands className="text-blue-400 text-4xl mb-4" />,
  },
];

const Service = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen py-20 px-6">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
          Services
        </span>
      </motion.h1>

      {/* Regular Services */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 shadow-md hover:shadow-blue-600/30 transition text-center"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">
              {service.title}
            </h3>
            <p className="text-neutral-300 font-medium mb-1">
              <span className="text-blue-300">{service.day}:</span>{" "}
              {service.time}
            </p>
            <p className="text-neutral-400">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Fire & Glory Conference */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="max-w-5xl mx-auto mt-20 bg-gradient-to-r from-blue-900 to-blue-700 p-10 rounded-2xl shadow-lg text-center border border-blue-600"
      >
        <FaFireAlt className="text-5xl text-orange-400 mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Fire & Glory Conference
        </h2>
        <p className="text-lg text-blue-100 mb-2">
          Every <span className="font-semibold">Wednesday to Friday</span> of
          each month
        </p>
        <p className="text-neutral-200 max-w-3xl mx-auto">
          A three-day Spirit-filled conference where the power of God is
          revealed through intense prayer, prophetic impartation, and the
          teaching of the Word. Lives are transformed, destinies are shifted,
          and revival fire is ignited.
        </p>
      </motion.div>
    </div>
  );
};

export default Service;
