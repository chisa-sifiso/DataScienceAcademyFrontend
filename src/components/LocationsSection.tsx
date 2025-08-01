import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "Midrand Campus",
      province: "Gauteng",
      address: "123 Technology Drive, Midrand, 1685",
      description: "Our flagship campus featuring state-of-the-art computer labs, innovation centers, and collaborative spaces.",
      facilities: ["High-tech computer labs", "AI research center", "Industry partnership hub", "Student lounge"]
    },
    {
      name: "Polokwane Campus", 
      province: "Limpopo",
      address: "456 Innovation Street, Polokwane, 0700",
      description: "Modern training facility bringing world-class data science education to the heart of Limpopo province.",
      facilities: ["Modern training rooms", "Cloud computing lab", "Career services center", "Library & study areas"]
    }
  ];

  return (
    <section id="locations" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Locations</h2>
          <p className="section-subtitle">
            Conveniently located campuses designed to provide the best learning environment 
            for your data science journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="tech-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="text-primary" size={24} />
                  <div>
                    <CardTitle className="text-xl">{location.name}</CardTitle>
                    <p className="text-muted-foreground">{location.province}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{location.address}</p>
                <p className="mb-6">{location.description}</p>
                
                <h4 className="font-semibold mb-3">Campus Facilities:</h4>
                <ul className="space-y-2">
                  {location.facilities.map((facility, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{facility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-primary/5 rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="text-primary mb-3" size={32} />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-muted-foreground">+27 (0)11 234 5678</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="text-primary mb-3" size={32} />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-muted-foreground">info@datascienceacademy.co.za</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-primary mb-3" size={32} />
              <h4 className="font-semibold mb-2">Operating Hours</h4>
              <p className="text-muted-foreground">Mon-Fri: 8AM-6PM<br />Sat: 9AM-2PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;