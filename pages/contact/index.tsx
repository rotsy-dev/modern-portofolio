"use client";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState, type FormEvent } from "react";

import ContactInfo from "../../components/ContactInfo";
import { useLanguage } from "../../context/LanguageContext";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { t } = useLanguage();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[1000px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {t.contact.heading} <span className="text-accent">{t.contact.headingAccent}</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto lg:mx-0"
              onSubmit={handleSubmit}
              autoComplete="off"
              autoCapitalize="off"
            >
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  className="input"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.emailPlaceholder}
                  className="input"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder={t.contact.subjectPlaceholder}
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
              />
              <textarea
                name="message"
                placeholder={t.contact.messagePlaceholder}
                className="textarea"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
              />
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                disabled={isLoading}
                aria-disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {isLoading ? "..." : t.contact.submitBtn}
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>

              {status === "success" && (
                <p className="text-sm text-green-400" role="status">
                  {t.contact.successMessage}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400" role="alert">
                  Une erreur est survenue. Merci de réessayer ou de m&apos;écrire directement par e-mail.
                </p>
              )}
            </motion.form>

            <div className="w-full lg:w-[320px] shrink-0">
              <ContactInfo heading={t.contact.infoHeading} items={t.contact.info} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;