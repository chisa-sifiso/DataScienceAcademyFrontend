import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      image: "/cet.jpg", // replace with your actual image paths
      title: "Industry Certifications",
      description: "Earn globally recognized certifications from Amazon, Microsoft, IBM, and Huawei",
      badge: "Certified"
    },
    {
      image: "/job.jpg",
      title: "Job Opportunities",
      description: "95% job placement rate with our extensive network of partner companies",
      badge: "95% Placement"
    },
    {
      image: "/SETA.jpg",
      title: "Accredited Training",
      description: "MICT-SETA accredited programs ensuring quality and industry recognition",
      badge: "MICT-SETA"
    },
    {
      image: "/QCTO.jpg",
      title: "QCTO Recognition",
      description: "Quality Council for Trades and Occupations certified qualifications",
      badge: "QCTO Certified"
    }
  ];

  const achievements = [
    "Over 1000 successful graduates",
    "95% job placement rate within 6 months",
    "Average salary increase of 150%",
    "Partnership with 50+ leading companies",
    "24/7 career support and mentorship",
    "Flexible learning schedules"
  ];

  return (
    <section id="why-us" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Join thousands of successful graduates who have transformed their careers with our 
            comprehensive training programs and industry connections.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="tech-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-md p-2">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <Badge variant="secondary" className="mb-2">{benefit.badge}</Badge>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Our Track Record</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-success" />
                <span className="text-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
