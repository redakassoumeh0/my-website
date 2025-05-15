// components/Stats.jsx
"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "7+" },
    { label: "Production Tools", value: "2+" },
    { label: "Messages Sent \n(Speed Whats)", value: "1M+" },
  ];

  return (
    <section className="px-6 py-20 bg-background text-center text-foreground">
      <h2 className="text-3xl md:text-5xl  font-bold text-primary mb-12">
        Stats
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="text-3xl font-bold text-primary">{item.value}</div>
            <div className="text-muted-foreground mt-2">
              <span>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
