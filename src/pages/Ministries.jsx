// src/pages/Ministries.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Ministries page
 * - Uses Sample A leadership lists for every ministry
 * - Smooth scroll-triggered reveals (not "once": they'll animate each time they enter viewport)
 * - Responsive and Tailwind-first layout
 *
 * Make sure you have framer-motion installed: npm i framer-motion
 */

const sectionVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 0.1, 0.12, 1] },
  },
};

const listItemVariant = {
  hidden: { opacity: 0, x: -10 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 * i, duration: 0.45, ease: "easeOut" },
  }),
};

const Ministries = () => {
  // Sample A leadership lists for each ministry
  const mensLeadership = [
    { name: "Mr. Samuel Owusu", role: "President" },
    { name: "Elder Daniel Mensah", role: "Vice President" },
    { name: "Deacon Paul Addo", role: "Secretary" },
    { name: "Mr. Joseph Agyeman", role: "Treasurer" },
  ];

  const youthLeadership = [
    // We'll highlight Mr. Jones Yarley in copy below; still include supporting team
    { name: "Mr. Jones Yarley", role: "Youth Director" },
    { name: "Ms. Ama Serwaa", role: "Assistant Youth Leader" },
    { name: "Mr. Kofi Ansah", role: "Events Coordinator" },
  ];

  const choirLeadership = [
    { name: "Mrs. Lydia Ofori", role: "Head Choir Director" },
    { name: "Mr. Emmanuel Boateng", role: "Music Minister (Harmony)" },
    { name: "Ms. Grace Agyapong", role: "Vocal Trainer" },
  ];

  const childrensLeadership = [
    { name: "Auntie Wendy", role: "Children's Ministry Lead" },
    { name: "Miss Sarah Osei", role: "Turtle Doves Coordinator" },
    { name: "Mr. Michael Quaye", role: "Disciples Coordinator" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-blue-400">Ministries</span>
          </h1>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            Dream House Chapel International ministers through a range of
            ministries — each designed to shepherd, train, and equip members of
            every age and season. Below are our core ministries, their purpose,
            and the Sample A leadership for each.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Men’s Fellowship */}
          <motion.section
            className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-lg"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={sectionVariant}
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-3">
              Men’s Fellowship Ministry
            </h2>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              The Men’s Fellowship Ministry cultivates spiritual maturity,
              godly leadership, and brotherhood among the men of the church.
              Through weekly gatherings, Bible study sessions, mentorship
              circles, and outreach activities, the ministry exists to equip men
              to be faithful leaders in their homes, workplaces, and
              communities—grounded in Scripture and active in service.
            </p>

            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                Leadership (Sample A)
              </h4>
              <ul className="text-sm text-neutral-300 divide-y divide-neutral-800 rounded-md overflow-hidden">
                {mensLeadership.map((p, i) => (
                  <motion.li
                    className="flex justify-between px-4 py-3"
                    key={p.name}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={listItemVariant}
                  >
                    <span>{p.name}</span>
                    <span className="text-neutral-400">{p.role}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Youth Ministry */}
          <motion.section
            className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-lg"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={sectionVariant}
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-3">
              Youth Ministry
            </h2>

            <p className="text-neutral-300 mb-3 leading-relaxed">
              The Youth Ministry is a vibrant, high-energy environment where
              adolescents and young adults are discipled and trained for
              leadership. Activities include dynamic worship nights, topical
              teaching, leadership development workshops, and practical
              community service projects.
            </p>

            <div className="mb-3">
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                About the Director
              </h4>
              <p className="text-neutral-300 leading-relaxed">
                <strong className="text-blue-300">Mr. Jones Yarley</strong> is
                the Youth Director — a devoted servant with a passion for
                mentoring the next generation. Mr. Yarley brings a blend of
                theological depth and approachable leadership to the role. He
                prioritizes discipleship, creative worship, and equipping young
                people with practical skills for life and ministry. Under his
                guidance the youth ministry runs flagship programs such as the
                {" "}
                <em>Leadership Incubator</em>, weekend outreach initiatives,
                and peer-mentoring circles that foster spiritual growth and
                community.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                Leadership (Sample A)
              </h4>
              <ul className="text-sm text-neutral-300 divide-y divide-neutral-800 rounded-md overflow-hidden">
                {youthLeadership.map((p, i) => (
                  <motion.li
                    className="flex justify-between px-4 py-3"
                    key={p.name}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={listItemVariant}
                  >
                    <span>{p.name}</span>
                    <span className="text-neutral-400">{p.role}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Choir Ministry */}
          <motion.section
            className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-lg"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={sectionVariant}
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-3">
              Choir Ministry
            </h2>

            <p className="text-neutral-300 mb-4 leading-relaxed">
              The Choir Ministry leads the congregation into the presence of God
              through music of excellence and worshipful service. The choir
              ministers in weekly services, special programs, weddings, and
              community outreach events. Focus is placed on musical training,
              spiritual formation, and the use of music as a vehicle for
              pastoral ministry.
            </p>

            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                Leadership (Sample A)
              </h4>
              <ul className="text-sm text-neutral-300 divide-y divide-neutral-800 rounded-md overflow-hidden">
                {choirLeadership.map((p, i) => (
                  <motion.li
                    className="flex justify-between px-4 py-3"
                    key={p.name}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={listItemVariant}
                  >
                    <span>{p.name}</span>
                    <span className="text-neutral-400">{p.role}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Children’s Ministry */}
          <motion.section
            className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-lg"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={sectionVariant}
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-3">
              Children’s Ministry
            </h2>

            <p className="text-neutral-300 mb-3 leading-relaxed">
              Our Children’s Ministry nurtures the spiritual formation of young
              hearts in a safe, joyous, and biblically-rich environment. We
              provide age-appropriate teaching, creative worship, and activity
              groups that foster a child’s relationship with Jesus and their
              understanding of Scripture.
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                Departments & Lead
              </h4>
              <ul className="text-sm text-neutral-300 space-y-2">
                <li className="flex justify-between">
                  <span>Turtle Doves</span>
                  <span className="text-neutral-400">Ages 3–6</span>
                </li>
                <li className="flex justify-between">
                  <span>Disciples</span>
                  <span className="text-neutral-400">Ages 7–12</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-neutral-200 mb-2">
                Leadership (Sample A)
              </h4>
              <ul className="text-sm text-neutral-300 divide-y divide-neutral-800 rounded-md overflow-hidden">
                {childrensLeadership.map((p, i) => (
                  <motion.li
                    className="flex justify-between px-4 py-3"
                    key={p.name}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={listItemVariant}
                  >
                    <span>{p.name}</span>
                    <span className="text-neutral-400">{p.role}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-3 text-neutral-400 text-sm">
                <strong>Auntie Wendy</strong> leads the Children’s Ministry with
                warmth and child-focused discipleship. She oversees curriculum,
                volunteer care, and family engagement so our youngest members
                grow rooted in the faith.
              </p>
            </div>
          </motion.section>
        </div>

        {/* closing note */}
        <div className="mt-12 text-center text-neutral-400">
          <p>
            For ministry inquiries, volunteering or to get connected with any
            ministry team — please visit the Contact page or speak with one of
            our ministry leaders after service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ministries;
