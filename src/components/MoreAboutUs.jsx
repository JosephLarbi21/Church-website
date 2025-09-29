import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-neutral-900 text-white min-h-screen py-16 px-6">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-14"
      >
       Know More  {" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
           About Us
        </span>
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Church History */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 shadow-lg hover:shadow-blue-600/30 transition"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Our History
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Dream House Chapel International was founded with a burning vision
            to raise a prophetic generation rooted in God’s Word and filled with
            the Holy Spirit. From humble beginnings in a small gathering of
            faithful believers, our church has grown into a vibrant spiritual
            family in Accra, Ghana, reaching lives across borders. <br /> <br />
            Over the years, we have experienced God’s unwavering faithfulness —
            moving from a small rented hall into a permanent worship center,
            expanding ministries, and raising leaders who now impact both the
            local and global church. What started as a mustard seed has grown
            into a prophetic movement, transforming lives through worship,
            evangelism, discipleship, and service.
          </p>
        </motion.div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 shadow-lg hover:shadow-blue-600/30 transition"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Our Vision
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              To build a prophetic house where believers are transformed through
              sound teaching, prophetic direction, and practical empowerment —
              raising men and women who influence every sphere of society for
              the Kingdom of God.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 shadow-lg hover:shadow-blue-600/30 transition"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Our Mission
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              To preach the uncompromising Gospel of Jesus Christ, mentor the
              next generation, equip the saints for Kingdom impact, and
              establish a prophetic community marked by love, excellence, and
              service to humanity.
            </p>
          </motion.div>
        </div>

        {/* Progress / Where we are now */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 shadow-lg hover:shadow-blue-600/30 transition"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Where We Are Now
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Today, Dream House Chapel International is more than a local church
            — it is a movement. With thriving ministries such as the Men’s
            Fellowship, Women’s Fellowship, Youth Ministry, Choir Ministry, and
            Children’s Ministry, we are raising well-rounded disciples equipped
            for spiritual and practical excellence. <br /> <br />
            Through conferences like the{" "}
            <span className="text-blue-400 font-medium">
              Fire and Glory Conference
            </span>{" "}
            and other impactful gatherings, we continue to empower believers,
            strengthen families, and transform communities. As we look to the
            future, we remain committed to the call of God — declaring boldly
            that our God is too big to make you small, and very rich to make you
            poor. You are recognized!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
