"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tradesnapperproject from "@/asset/Tradesnapperproject.png";
import TelegramBotProjectImage from "@/asset/TelegramBotProjectImage.png";

export default function PortfolioSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#0B0414] overflow-hidden py-16"
    >
      <div className="absolute top-0 right-0 w-[642px] h-[720px] bg-[radial-gradient(50%_50%_at_50%_50%,#763CAC_0%,rgba(50,15,133,0)_100%)]" />
      <div className="absolute top-0 right-0 w-[625px] h-[700px] bg-[radial-gradient(50%_50%_at_50%_50%,#763CAC_0%,rgba(50,15,133,0)_100%)]" />

      <div className="container mx-auto px-4 relative ">
        <div className="mb-16">
          <h3 className="text-[#9857D3] text-lg font-semibold mb-2">
            Featured Project
          </h3>
          <h2 className="text-[#CCD6F6] text-4xl font-semibold mb-8">
            Social Media Marketplace
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              className="lg:w-1/2 bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(105,59,147,0.2)_0%,rgba(110,191,244,0.0447917)_77.08%,rgba(70,144,213,0)_100%)] backdrop-blur-[40px] rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#CCD6F6] text-lg mb-6">
                A web app for buying and selling social media accounts. Browse,
                buy, and sell YouTube channels, TikTok accounts, Telegram
                channels, and more. View detailed profiles for each listing,
                including account statistics and price information. Easily
                negotiate with sellers, complete secure transactions, and manage
                your account listings. Create, manage, and track your purchases
                and sales, all in one seamless platform.
              </p>
            </motion.div>
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[#2B0B3A] rounded-lg transform translate-x-4 translate-y-4 lg:w-[582px]" />
              <div className="absolute inset-0 bg-[#2B215A] rounded-lg transform translate-x-2 translate-y-2 lg:w-[582px]" />
              <Image
                src={Tradesnapperproject}
                alt="Project Screenshot"
                width={582}
                height={341}
                className="rounded-lg relative object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-[#9857D3] text-lg font-semibold mb-2">
            Featured Project
          </h3>
          <h2 className="text-[#CCD6F6] text-4xl font-semibold mb-8">
            Telegram Bot for TradeSnapper
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {" "}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[#2B0B3A] rounded-lg transform translate-x-4 translate-y-4 lg:w-[582px]" />
              <div className="absolute inset-0 bg-[#2B215A] rounded-lg transform translate-x-2 translate-y-2 lg:w-[582px]" />
              <Image
                src={TelegramBotProjectImage}
                alt="Telegram Bot Screenshot"
                width={582}
                height={341}
                className="rounded-lg relative object-cover"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2 bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(70,144,213,0)_0%,rgba(110,191,244,0.0447917)_77.08%,rgba(105,59,147,0.2)_100%)] backdrop-blur-[40px] rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#CCD6F6] text-lg mb-6">
                A Telegram bot for TradeSnapper that helps users easily navigate
                the platform. Buyers can view and choose available social media
                accounts for purchase, while sellers can manage their balance,
                listings, and transactions. The bot remembers user preferences
                and securely handles transactions through chat, making the
                process more seamless and engaging. Whether you&apos;re a buyer or
                seller, the bot provides a personalized experience, automating
                many processes for smoother operations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
