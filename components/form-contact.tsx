/* eslint-disable react/no-unescaped-entities */
"use client";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "@/context/LanguageContext";

export default function FormContact() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    if (!name.trim()) {
      toast({
        title: language === "en" ? "Name is required" : "Le nom est requis",
        description: language === "en" ? "Please enter your name." : "Veuillez entrer votre nom.",
        variant: "destructive",
      });
      return;
    }
    if (!email.trim()) {
      toast({
        title: language,
        description: language === "en" ? "Please enter your email." : "Veuillez entrer votre e-mail.",
        variant: "destructive",
      });
      return;
    }
    if (!message.trim()) {
      toast({
        title: language === "en" ? "Message is required" : "Le message est requis",
        description: language === "en" ? "Please enter your message." : "Veuillez entrer votre message.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setEmail("");
      setName("");
      setMessage("");
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Card>
      <CardContent>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground mb-6">
              {
                language === "en"
                  ? "Thank you for reaching out. We'll get back to you within 24 hours."
                  : " Merci de m'avoir contacté. Je vous répondrai dans les 24 heures."
              }
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              {
                language === "en" ? "Send Another Message" : "Envoyer un autre message"
              }
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder={language === "en" ? "Your Name" : "Votre nom"}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder= {language === "en" ? "Your Email" : "Votre e-mail"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder={language === "en" ? "Your Message" : "Votre message"}
                className="min-h-[130px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (language === "en" ? "Sending..." : "Envoi...") : (language === "en" ? "Send Message" : "Envoyer un message")}
              {/* envoi... : Envoyer un message */}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
