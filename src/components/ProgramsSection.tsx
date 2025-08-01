import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Bot, Shield, Cloud, Database, Code } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Master machine learning, deep learning, and neural networks",
      color: "text-tech-blue"
    },
    {
      icon: Bot,
      title: "Robotics & Automation",
      description: "Build intelligent robots and automated systems",
      color: "text-tech-purple"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect digital assets with advanced security protocols",
      color: "text-destructive"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Deploy scalable solutions on AWS, Azure, and Google Cloud",
      color: "text-tech-teal"
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Process and analyze large datasets for business insights",
      color: "text-success"
    },
    {
      icon: Code,
      title: "Python & R Programming",
      description: "Master the core programming languages for data science",
      color: "text-warning"
    }
  ];

  const partnerships = [
    { name: "Amazon Web Services", logo: "/aws.png" },
    { name: "Microsoft Azure", logo: "/Azure.png" },
    { name: "Huawei", logo: "/Huawei.png" },
    { name: "IBM", logo: "/IBM.png" }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Comprehensive 4IR skills training programs designed to prepare you for the future of technology.
            Our curriculum is developed in partnership with industry leaders to ensure real-world relevance.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="tech-card group">
                <CardHeader>
                  <div className={`${program.color} mb-4`}>
                    <IconComponent size={48} className="mx-auto" />
                  </div>
                  <CardTitle className="text-center">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{program.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partnerships Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Strategic Partnerships</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-2 p-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm text-muted-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Badge variant="outline" className="text-primary border-primary">
              Industry-Recognized Certifications Available
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
