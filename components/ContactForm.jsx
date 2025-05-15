"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (data.honeypot) return; // honeypot spam check

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send the message.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while sending.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 w-full max-w-3xl bg-card p-8 rounded-2xl border border-border shadow"
    >
      {/* Hidden Honeypot */}
      <input type="text" {...register("honeypot")} className="hidden" />

      {/* Name */}
      <div>
        <label className="block mb-2 font-medium">Full Name</label>
        <input
          {...register("name", {
            required: true,
            pattern: /^[A-Za-z\s]{2,}$/,
          })}
          className="w-full p-3 rounded-lg bg-muted text-foreground border border-border"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid name</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="w-full p-3 rounded-lg bg-muted text-foreground border border-border"
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            Please enter a valid email
          </p>
        )}
      </div>

      {/* Contact */}
      <div>
        <label className="block mb-2 font-medium">
          WhatsApp number or Telegram username
        </label>
        <input
          {...register("contact", {
            required: true,
            pattern: /^(@?[a-zA-Z0-9_]{3,}|[0-9]{6,15})$/,
          })}
          className="w-full p-3 rounded-lg bg-muted text-foreground border border-border"
          placeholder="Number or @username"
        />
        {errors.contact && (
          <p className="text-red-500 text-sm mt-1">
            Please enter a valid contact
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 font-medium">Message</label>
        <textarea
          {...register("message", { required: true, minLength: 10 })}
          className="w-full p-3 h-40 rounded-lg bg-muted text-foreground border border-border"
          placeholder="Write your message here"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            Please enter a detailed message
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition w-full font-semibold"
        >
          Send Message
        </button>
      </div>
    </motion.form>
  );
}
