import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Ready to start your data science journey? Get in touch with our admissions team 
            or apply directly to secure your spot in our next cohort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="tech-card">
            <CardContent className="p-6 text-center">
              <Phone className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-bold text-lg mb-2">Call Our Admissions</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our admissions counselors</p>
              <p className="font-semibold text-primary">+27 (0)11 234 5678</p>
              <p className="text-sm text-muted-foreground mt-2">Mon-Fri: 8AM-6PM</p>
            </CardContent>
          </Card>

          <Card className="tech-card">
            <CardContent className="p-6 text-center">
              <Mail className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-bold text-lg mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-4">Get detailed information via email</p>
              <p className="font-semibold text-primary">admissions@datascienceacademy.co.za</p>
              <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="tech-card">
            <CardContent className="p-6 text-center">
              <MessageCircle className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-bold text-lg mb-2">WhatsApp Support</h3>
              <p className="text-muted-foreground mb-4">Quick questions and instant responses</p>
              <p className="font-semibold text-primary">+27 (0)82 123 4567</p>
              <p className="text-sm text-muted-foreground mt-2">9AM-5PM Daily</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't wait – our programs fill up quickly! Submit your application today and take the 
            first step towards becoming a data science professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button size="lg" className="text-lg px-8 py-4">
                <Send className="mr-2" size={20} />
                Apply Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Phone className="mr-2" size={20} />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;