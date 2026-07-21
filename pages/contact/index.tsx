import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState, type FormEvent } from "react";

import { useLanguage } from "../../context/LanguageContext";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.currentTarget;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert(t.contact.successMessage);
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {t.contact.heading} <span className="text-accent">{t.contact.headingAccent}</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            <div className="flex gap-x-6 w-full">
              <input type="hidden" name="form-name" value="contact" />

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
                {t.contact.submitBtn}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;