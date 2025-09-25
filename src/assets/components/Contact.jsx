import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../profile-pictures/style.js";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "your_public_key"
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="flex flex-col xl:flex-row gap-10 overflow-hidden bg-black-100 px-6 py-12">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex-[0.75] p-8 rounded-2xl bg-gray-900"
      >
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.1 }}
          viewport={{ once: false }}
          className={styles.sectionSubText}
        >
          Get in touch
        </motion.p>

        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
          className={styles.sectionHeadText}
        >
          Contact.
        </motion.h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          {/* Name */}
          <motion.label
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
            className="flex flex-col"
          >
            <span className="text-white mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-gray-800 py-3 px-4 rounded-lg text-white outline-none border border-gray-600"
              required
            />
          </motion.label>

          {/* Email */}
          <motion.label
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.4 }}
            viewport={{ once: false }}
            className="flex flex-col"
          >
            <span className="text-white mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-gray-800 py-3 px-4 rounded-lg text-white outline-none border border-gray-600"
              required
            />
          </motion.label>

          {/* Message */}
          <motion.label
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.5 }}
            viewport={{ once: false }}
            className="flex flex-col"
          >
            <span className="text-white mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-800 py-3 px-4 rounded-lg text-white outline-none border border-gray-600 resize-none"
              required
            />
          </motion.label>

          {/* Button */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.6 }}
            viewport={{ once: false }}
            className="flex justify-start"
          >
            <button
              type="submit"
              className="bg-blue-600 py-2 px-8 text-sm rounded-md text-white font-medium hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <iframe
          title="Location"
          className="w-full h-full rounded-xl border"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63532.85529223045!2d-0.32488247832033285!3d5.596033700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99369e7b0b21%3A0xb17cb1f62c26f5d6!2sDream%20House%20Chapel%20INT!5e0!3m2!1sen!2sgh!4v1756094097023!5m2!1sen!2sgh"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Contact;
