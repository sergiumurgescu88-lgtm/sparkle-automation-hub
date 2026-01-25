import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Numele trebuie să aibă cel puțin 2 caractere" })
    .max(100, { message: "Numele trebuie să aibă maxim 100 caractere" }),
  email: z
    .string()
    .trim()
    .email({ message: "Adresa de email nu este validă" })
    .max(255, { message: "Email-ul trebuie să aibă maxim 255 caractere" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Numărul de telefon trebuie să aibă cel puțin 10 cifre" })
    .max(20, { message: "Numărul de telefon trebuie să aibă maxim 20 caractere" })
    .regex(/^[\d\s+\-()]+$/, { message: "Număr de telefon invalid" }),
  service: z.string().min(1, { message: "Selectați un serviciu" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Mesajul trebuie să aibă cel puțin 10 caractere" })
    .max(1000, { message: "Mesajul trebuie să aibă maxim 1000 caractere" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { value: "salon", label: "Automatizare Salon Înfrumusețare" },
  { value: "medical", label: "Automatizare Cabinet Medical" },
  { value: "restaurant", label: "Automatizare Restaurant" },
  { value: "ai", label: "Automatizări Inteligență Artificială" },
  { value: "public", label: "Automatizare Sector Public" },
  { value: "retail", label: "Automatizare Magazine Retail" },
  { value: "hotel", label: "Automatizare Hotel/Pensiune" },
  { value: "chatbot", label: "Chatboți AI WhatsApp/Telegram" },
  { value: "social", label: "Automatizare Social Media" },
  { value: "imobiliare", label: "Automatizare Agenții Imobiliare" },
  { value: "smb", label: "Automatizare Afaceri Mici/Mijlocii" },
  { value: "delivery", label: "Servicii Livrare Premium" },
  { value: "altele", label: "Altele" },
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      form.reset();
      toast({
        title: "Mesaj trimis cu succes!",
        description: "Vă vom contacta în cel mai scurt timp posibil.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Eroare la trimitere",
        description: "A apărut o eroare. Vă rugăm încercați din nou.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contactează-ne
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solicită o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ofertă Personalizată
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Completează formularul și echipa noastră te va contacta în cel mai scurt timp
            pentru a discuta soluția perfectă pentru afacerea ta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <a href="tel:+40770107085" className="text-muted-foreground hover:text-primary transition-colors">
                    +40 770 107 085
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:contact@mrdelivery.ro" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@mrdelivery.ro
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Locație</h3>
                  <p className="text-muted-foreground">
                    București, România
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="font-semibold mb-2">Răspuns Rapid</h3>
              <p className="text-muted-foreground text-sm">
                Echipa noastră răspunde de obicei în mai puțin de 2 ore în timpul programului de lucru.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {isSuccess ? (
              <div className="glass-card p-12 rounded-2xl text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Mesaj Trimis cu Succes!</h3>
                <p className="text-muted-foreground mb-6">
                  Mulțumim pentru mesaj! Echipa noastră te va contacta în curând.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                >
                  Trimite alt mesaj
                </Button>
              </div>
            ) : (
              <div className="glass-card p-8 rounded-2xl">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nume Complet *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ion Popescu"
                                className="bg-background/50 border-border/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="ion@exemplu.ro"
                                className="bg-background/50 border-border/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+40 770 123 456"
                                className="bg-background/50 border-border/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Serviciu Dorit *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background/50 border-border/50">
                                  <SelectValue placeholder="Selectează un serviciu" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service.value} value={service.value}>
                                    {service.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mesaj *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Descrieți pe scurt cerințele dvs..."
                              className="bg-background/50 border-border/50 min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Se trimite...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Trimite Cererea de Ofertă
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Prin trimiterea formularului, sunteți de acord cu{" "}
                      <a href="#" className="text-primary hover:underline">
                        politica de confidențialitate
                      </a>
                      .
                    </p>
                  </form>
                </Form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
