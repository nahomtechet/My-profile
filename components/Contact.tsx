"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

  
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="bg-[#0b0414] py-16 lg:py-24 relative">
     
      <div className="absolute top-0 left-0 w-[642px] h-[720px] bg-[radial-gradient(50%_50%_at_50%_50%,#763CAC_0%,rgba(50,15,133,0)_100%)] opacity-5"></div>
      <div className="absolute top-0 left-0 w-[625px] h-[700px] bg-[radial-gradient(50%_50%_at_50%_50%,#763CAC_0%,rgba(50,15,133,0)_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  
          <div className="text-white space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
            <p className="text-sm sm:text-base text-white/50">
              We’d love to hear from you. Here’s how you can reach us:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-white">
                  <FaPhoneAlt className="inline mr-2 text-[#763CAC]" />
                  Phone Number
                </h3>
                <p className="text-white/70">
                  <a href="tel:+251996590910" className="hover:text-[#763CAC]">
                    +251996590910
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-white">
                  <FaEnvelope className="inline mr-2 text-[#763CAC]" />
                  Email Address
                </h3>
                <p className="text-white/70">
                  <a
                    href="mailto:exitvitionet@gmail.com"
                    className="hover:text-[#763CAC]"
                  >
                    exitvitionet@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-white">
                  <FaMapMarkerAlt className="inline mr-2 text-[#763CAC]" />
                  Address
                </h3>
                <p className="text-white/70">
                  <a
                    href="https://maps.app.goo.gl/AVFxPD35yxB4tExu9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#763CAC]"
                  >
                    Bole Michael, Addis Ababa, Ethiopia
                  </a>
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="mailto:exitvisionet@gmail.com" className="text-white hover:text-[#763CAC]">
                <FaEnvelope size={24} />
              </a>
              <a href="https://github.com/nahomtechet" className="text-white hover:text-[#763CAC]">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/behailu-bekele-7b6baa2a8/" className="text-white hover:text-[#763CAC]">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

         
          <div className="bg-[#1e0f2d] p-8 rounded-lg shadow-lg lg:shadow-2xl xl:shadow-3xl">
            {isSubmitted ? (
              <div className="text-center text-white">
                <h3 className="text-lg font-semibold">
                  Thank you for contacting us!
                </h3>
                <p className="text-sm">
                  We will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="text-white font-semibold mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-[#2a1a3e] text-white focus:outline-none focus:ring-2 focus:ring-[#763CAC] focus:ring-opacity-50 shadow-md hover:shadow-lg"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-white font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#2a1a3e] text-white focus:outline-none focus:ring-2 focus:ring-[#763CAC] focus:ring-opacity-50 shadow-md hover:shadow-lg"
                    placeholder="youremail@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-white font-semibold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#2a1a3e] text-white focus:outline-none focus:ring-2 focus:ring-[#763CAC] focus:ring-opacity-50 shadow-md hover:shadow-lg"
                    placeholder="Regarding your services"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-white font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#2a1a3e] text-white focus:outline-none focus:ring-2 focus:ring-[#763CAC] focus:ring-opacity-50 shadow-md hover:shadow-lg"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-[#763CAC] text-white font-semibold rounded-lg hover:bg-[#7127BA] focus:outline-none focus:ring-2 focus:ring-[#763CAC] focus:ring-opacity-50 shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
