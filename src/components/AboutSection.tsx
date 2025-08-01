import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import teamPhoto from "@/assets/team-photo.jpg";

// Import team member images
import MikaImage from "@/assets/Mika.jpeg";
import DavidImge from "@/assets/David.jpeg";
import GeorgeImage from "@/assets/George.jpeg";
import KeithImage from "@/assets/Keith.jpeg";
import OwenImage from "@/assets/Owen.jpeg";
import Navigation from "@/components/Navigation";

const AboutSection = () => {
  const teamMembers = [
    {
      name: " Mika Chipana ",
      title: "Head of Marketing PR and Communications",
      specialization: "Master’s in science: Publishing Digital & Print Media, Bachelor of Fine Arts: Filmmaking ",
      image: MikaImage
    },
    {
      name: "David Sithole",
      title: "Technical Lead Data science and Robotics",
      specialization: "BEng Computer Engineering, BEngHons Computer Engineering, MEng Computer Engineering (in progress)",
      image: DavidImge
    },
    {
      name: "George Thosago",
      title: "Managing Director , Innovation and Entrepreneurship",
      specialization: "B.Sc. Computer science and statistics, Masters in digital business, MSc in Artificial Intelligence (in progress)",
      image: GeorgeImage
    },
    {
      name: "Keith Ramunenyiwa",
      title: "Technical Lead Data science and VR/AR ",
      specialization: "BSc General, BSc honours in chemistry, MSc Chemistry, MSc in Data science (in progress) ",
      image: KeithImage
    },
    {
      name: "Owen Rampora ",
      title: " Technical Lead Data engineering, Cybersecurity and Architecture",
      specialization: "National Diploma IT Software Development, Bachelor of Technology in IT Information Systems",
      image: OwenImage
    }
  ];

  return (
    
    <section id="about" className="py-20 bg-secondary/30">
       <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">
            Meet our world-class team of data science experts, industry leaders, and passionate educators 
            dedicated to transforming careers through cutting-edge technology training.
          </p>
        </div>

        {/* Team Description and Photo */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={teamPhoto}
              alt="Data Science Academy Team"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Excellence in Education</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our academy brings together seasoned professionals from leading tech companies, 
              acclaimed researchers, and industry veterans who are passionate about sharing their 
              knowledge and expertise with the next generation of data scientists.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">20+ Years Combined Experience</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Industry-Certified Instructors</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">1000+ Graduates Placed</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member Cards */}
        {/* Team Member Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
  {teamMembers.map((member, index) => (
    <Card key={index} className="tech-card w-full max-w-sm">
      <CardContent className="p-6 text-center">
        <div className="w-32 h-32 mx-auto mb-4">
          <img 
            src={member.image}
            alt={member.name}
            className="rounded-full object-cover w-full h-full border-4 border-primary/30"
          />
        </div>
        <h4 className="font-bold text-lg mb-2">{member.name}</h4>
        <p className="text-primary font-medium mb-2">{member.title}</p>
        <p className="text-sm text-muted-foreground">{member.specialization}</p>
      </CardContent>
    </Card>
  ))}

  {/* Filler card to keep 3 columns balanced */}
  {teamMembers.length % 3 !== 0 && (
    <div className="hidden lg:block w-full max-w-sm" />
  )}
</div>

      </div>
    </section>
  );
};

export default AboutSection;
