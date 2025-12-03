import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CTO, TechStartup Inc.",
    content:
      "Sathish transformed our deployment process completely. What used to take days now happens in minutes. His expertise in Kubernetes and CI/CD is exceptional.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Engineering Manager, CloudFirst",
    content:
      "Working with Sathish on our multi-cloud migration was seamless. His deep understanding of AWS, Azure, and GCP helped us achieve 40% cost reduction while improving reliability.",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "VP Engineering, DataTech Solutions",
    content:
      "Sathish's MLOps expertise helped us reduce model deployment time from weeks to hours. His attention to detail and commitment to best practices is remarkable.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Product Manager, FinTech Corp",
    content:
      "The monitoring and observability stack Sathish implemented gave us unprecedented visibility into our systems. Downtime reduced by 90% within the first month.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-6 bg-gradient-neon bg-clip-text text-transparent">
            What People Say
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border-primary/20 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary h-full relative">
                  <Quote
                    className="absolute top-4 right-4 text-primary/20"
                    size={40}
                  />

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <p className="text-foreground/90 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
