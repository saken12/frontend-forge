import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, CheckCircle, MapPin, Clock, Calendar, ArrowLeft } from "lucide-react";

// Mock job data - in real app this would come from API/props
const mockJobs: Record<string, {
  id: string;
  company: string;
  logo: string;
  title: string;
  location: string;
  timezone: string;
  type: string;
  postedDate: string;
  description: string[];
  experience: string;
  skills: string[];
  rate: string;
  requirements: string[];
  benefits: string[];
}> = {
  "1": {
    id: "1",
    company: "Atlassian",
    logo: "🔷",
    title: "Product Manager",
    location: "Onsite, New York",
    timezone: "UTC -5",
    type: "Full-time",
    postedDate: "Apr 8, 2025",
    description: [
      "Join Atlassian and be part of a team that's redefining the way the world works! At Atlassian, we are passionate about innovation and collaboration, and we're constantly pushing boundaries to deliver exceptional solutions that empower teams to achieve more.",
      "Here, you'll work on cutting-edge projects that challenge norms and inspire creativity. From developing industry-leading tools to designing seamless user experiences, our work touches millions of users worldwide. By leveraging the latest technologies, you'll contribute to projects that shape the future."
    ],
    experience: "Lead",
    skills: ["UX/UI", "Wireframing", "Tailwind CSS", "Typography"],
    rate: "$90-120/hr",
    requirements: [
      "Collaborate with cross-functional teams to design and implement innovative solutions.",
      "Contribute to projects that leverage the latest technologies to solve real-world problems.",
      "Participate in brainstorming sessions, strategy discussions, and iterative improvements.",
      "Stay ahead of industry trends to ensure our products remain cutting-edge and user-focused."
    ],
    benefits: [
      "Innovative Work: Join projects that define the future of collaboration and productivity.",
      "Professional Growth: Access learning opportunities, mentorship programs, and clear career progression paths.",
      "Team-Centric Culture: Work in an environment that celebrates inclusivity, respect, and shared success.",
      "Flexibility: Enjoy hybrid or remote work options that support work-life balance.",
      "Meaningful Impact: See the results of your work in tools and solutions used by teams globally."
    ]
  },
  "2": {
    id: "2",
    company: "Netflix",
    logo: "🎬",
    title: "Senior UX Designer",
    location: "Remote",
    timezone: "UTC -8",
    type: "Full-time",
    postedDate: "Apr 5, 2025",
    description: [
      "Netflix is looking for a Senior UX Designer to join our creative team. You'll be responsible for designing intuitive and engaging user experiences across our streaming platform.",
      "Work with world-class designers and engineers to create experiences that delight millions of users worldwide."
    ],
    experience: "Senior",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    rate: "$100-140/hr",
    requirements: [
      "5+ years of UX design experience",
      "Strong portfolio demonstrating user-centered design process",
      "Experience with design systems at scale",
      "Excellent communication and presentation skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Unlimited PTO",
      "Health, dental, and vision coverage",
      "Learning and development budget"
    ]
  }
};

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const job = id ? mockJobs[id] : null;

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="text-muted-foreground">Job not found</p>
        <Button variant="outline" onClick={() => navigate("/jobs")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{job.logo}</span>
          <span className="text-muted-foreground">{job.company}</span>
          <span className="text-muted-foreground text-sm">Posted {job.postedDate}</span>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <CheckCircle className="h-4 w-4" />
          Mark as applied
        </Button>
      </div>

      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">{job.title}</h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {job.timezone}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {job.type}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button>Apply</Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Description */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {job.description.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Experience, Skills, Rate */}
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="font-medium mb-2">Experience</h3>
              <p className="text-muted-foreground">{job.experience}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Rate</h3>
              <p className="text-muted-foreground">{job.rate}</p>
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Requirement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex gap-2 text-muted-foreground">
                  <span className="text-primary">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-2 text-muted-foreground">
                  <span className="text-primary">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
