'use client';

import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SocialLinks } from "@/app/constants/links";

interface ConnectProps {
  locale: "en-AU" | "ja";
}

const ConnectCopy = {
  en: {
    title: "Connect",
    description: "Looking to launch or refresh your website? I’d love to hear your ideas and help bring them to life with thoughtful design and clean code. If you’re a digital agency looking for a frontend collaborator, I’m also open to contract work—let’s chat!",
    ctx: "Or just send me a quick message right here 👇",
    buttonText: "Say Hello",
  },
  ja: {
    title: "コネクト",
    description: "新しくサイトを作りたい方、今のサイトをもっと良くしたい方、まずはお気軽にご相談ください。丁寧なデザインとコードで、あなたの想いをカタチにします。制作会社の方とのお仕事も歓迎しています！",
    ctx: "または、ここから気軽にメッセージどうぞ 👇",
    buttonText: "メッセージを送る",
  }
};

export const ConnectComponent = ({ locale }: ConnectProps) => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleToggleForm = () => {
    setShowForm(prev => !prev);
  };

  //handle from submission, use logic from /api/contact.ts
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data["bot-field"] = ""; // Honeypot field
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();
      setShowForm(false);
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setShowForm(false);
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-cream p-6 rounded-lg shadow-lg text-center">
          <h4 className="text-heading03 font-semibold text-brown mb-4">
            {locale === "ja" ? "メッセージを送信しました！" : "Message Sent!"}
          </h4>
          <p className="text-body04 text-secondary mb-4">
            {locale === "ja" ? "ありがとうございます！できるだけ早くお返事します。" : "Thank you! I will get back to you as soon as possible."}
          </p>
          <Link href="/" className="text-accent hover:underline">
            {locale === "ja" ? "ホームに戻る" : "Back to Home"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center relative">
      <div className="container grid grid-cols-1 lg:grid-cols-5 gap-10 px-6 lg:px-0">
        <div className="col-span-2 flex flex-col justify-center items-start">
          <h4 className="text-heading02 lg:text-heading01 font-semibold text-accent mb-6 md:mb-10">
            {locale === "ja" ? ConnectCopy.ja.title : ConnectCopy.en.title}
          </h4>

          <p className="text-body04 lg:text-body03 text-secondary font-heebo mb-4">
            {locale === "ja" ? ConnectCopy.ja.description : ConnectCopy.en.description}
          </p>

          <Link
            href="mailto:tomomi@flowdesigncode.com"
            target="_blank"
            className="text-body04 lg:text-body03 text-secondary font-heebo font-semibold"
          >
            tomomi@flowdesigncode.com
          </Link>

          <div className="flex gap-4 mt-4 mb-6">
            <Link href={SocialLinks.linkedin} target="_blank">
              <Icon icon="famicons:logo-linkedin" width="24" height="24" className="text-secondary" />
            </Link>
            <Link href={SocialLinks.github} target="_blank">
              <Icon icon="jam:github" width="24" height="24" className="text-secondary" />
            </Link>
            <Link href={SocialLinks.instagram} target="_blank">
              <Icon icon="streamline:instagram-solid" width="24" height="24" className="text-secondary" />
            </Link>
          </div>

          <p className="text-body04 font-heebo text-secondary mb-2 mt-6 md:mt-10">
            {locale === "ja" ? ConnectCopy.ja.ctx : ConnectCopy.en.ctx}
          </p>
          <button
            onClick={handleToggleForm}
            className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition"
          >
            {locale === "ja" ? ConnectCopy.ja.buttonText : ConnectCopy.en.buttonText}
          </button>
        </div>

        <div className="col-span-3">
          <NextImage
            src="/images/connect.jpg"
            alt="connect"
            layout="responsive"
            priority
            width={600}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-cream p-6 rounded-lg shadow-lg max-w-md w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={handleToggleForm}
                className="absolute top-2 right-3 text-brown hover:text-accent text-xl font-bold"
              >
                ×
              </button>
              <h4 className="text-heading03 font-semibold text-brown mb-4">
                {locale === "ja" ? "メッセージを送る" : "Send me a Message"}
              </h4>
              <form
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input type="text" name="name" placeholder={
                  locale === "ja" ? "お名前" : "Your Name"
                } required className="border p-2 rounded-md" />
                <input type="email" name="email" placeholder={
                  locale === "ja" ? "メールアドレス" : "Your Email"
                } required className="border p-2 rounded-md" />
                <textarea name="message" rows={4} placeholder={
                  locale === "ja" ? "メッセージ" : "Your Message"
                } required className="border p-2 rounded-md" />

                {/* Honeypot */}
                <input type="text" name="bot-field" className="hidden" />

                <button
                  type="submit"
                  className="bg-accent text-white py-2 rounded-md hover:bg-accent/90 transition"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Icon icon="lucide:loader" className="animate-spin mr-2" />
                      {locale === "ja" ? "送信中..." : "Sending..."}
                    </span>
                  ) : (
                    <span>{locale === "ja" ? ConnectCopy.ja.buttonText : ConnectCopy.en.buttonText}</span>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
