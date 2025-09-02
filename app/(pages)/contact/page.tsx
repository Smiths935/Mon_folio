/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, SendToBack } from "lucide-react";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import FormContact from "@/components/form-contact";
import { useLanguage } from "@/context/LanguageContext";

export default function page() {
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      labelF: "Adresse E-mail",
      value: "yvanfotso935@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      labelF: "Numéro de téléphone",
      value: "+237 658 241 310",
    },
    {
      icon: MapPin,
      label: "Location",
      labelF: "Localisation",
      value: "Bepanda one to one, Douala, Cameroun",
    },
  ];

  return (
    <div className="h-full container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4">
          Contact
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          {language === "en" ? "Get In Touch" : "Me Contacter"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === "en"
            ? `Have a project in mind or want to discuss collaboration opportunities?
          Feel free to reach out, and I'll get back to you as soon as possible.`
            : `Vous avez un projet en tête ou souhaitez discuter d'opportunités de collaboration ?
            N'hésitez pas à me contacter et je vous répondrai dans les plus brefs délais`}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FormContact />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="hover:bg-background/50 p-4">
                <CardContent className="flex items-center px-5 ">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {language === "en" ? info.label : info.labelF}
                    </h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-medium text-foreground dark:text-white mb-4">
              {language === "en" ? "Follow Me" : "Suivez-moi"}
            </h4>
            <div className="flex gap-4">
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.44 }}
                href="#"
                className="p-3 dark:dark:bg-gray-200 bg-gray-700 rounded-full dark:text-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.48 }}
                href="#"
                className="p-3 dark:bg-gray-200 bg-gray-700 rounded-full dark:text-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                href="#"
                className="p-3 dark:bg-gray-200 bg-gray-700 rounded-full dark:text-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </motion.a>
              {/* <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.54 }}
                href="#"
                className="p-3 dark:bg-gray-200 bg-gray-700 rounded-full dark:text-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </motion.a> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="p-8 space-y-2">
        <p className="">
          {language === "en" ? `Have a project?` : `Vous avez un projet ?`}
        </p>
        <TypewriterEffect
          className="text-4xl font-bold"
          words={["Discutons-en"]}
        />
        <Link href={"/"} className="flex justify-end hover:underline">
          {language === "en" ? "back to folio" : "retour au folio"}
          <SendToBack />
        </Link>
      </div>
    </div>
  );
}
