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
            Dream House Chapel is a vibrant, multi- ethnic, prophetic church with several worshippers. Started in
                    2006 as a fellowship in Somebody's Living room at La (Labadi) in Accra, the capital of Ghana.
                    Founded by Rev. Frederick Adjei-Boadi. The prayer meetings grew by the special Grace of God and
                    in 2011 the first ever Sunday Service was held in a class- room, wireless, still at La in Accra. The
                    Holy Spirit had aforetime mentioned of a possible relocation and God proved His Faithfullness and by
                    December 2014, we worshiped and celebrated God in our beautiful auditorium. Dream House Shares with
                    everyone The God-Kind of Life in Christ Jesus.
                
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
              Our Mission
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              The mission of Dream House Chapel is to empower everyone for Christ and in Christ to create an
                    atmosphere of cordiality in our homes, schools, workplaces, church and in the community. 
            
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 shadow-lg hover:shadow-blue-600/30 transition"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Our Beliefs
            </h2>
            <p className="text-neutral-300 leading-relaxed">
                 The Almighty God of Abraham, Isaac and Jacob (Isreal) is the Owner of The Heaven and
                    The Earth
                    including everything in it.He is the Covenant keeping God of King David . He is the God of
                    the Sure Mercies of Solomon.He is the Living God of Daniel and His Prophets.The Faithful,
                    The Only Holy God
                    Here in Dream House, Jesus Christ is the Only Begotten of The Father, in Him is The Father well
                    pleased. He is Our Lord and Master, Our Personal Saviour and Redeemer, Our King, Our Soon Coming
                    King and our King Forever
                    Again the Holy Spirit is the Only kind of God's Personal Power for His Children.
            
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 shadow-lg hover:shadow-blue-600/30 transition"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Our Vision
            </h2>
            <p className="text-neutral-300 leading-relaxed">
                 To grow a consolidated faith in the Lord Jesus Christ
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 shadow-lg hover:shadow-blue-600/30 transition"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Our Objective
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              TOMBSTONE...TO GOD ALONE BE ALL THE GLORY.
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
