import { Search, MapPin, Clock, Briefcase, Calendar, Building, X, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const filters = [
  { icon: MapPin, label: "Location" },
  { icon: Clock, label: "Timezone" },
  { icon: Briefcase, label: "Job Type" },
  { icon: Calendar, label: "Commitment" },
  { icon: Building, label: "Work Model" },
];

const jobs = [
  {
    id: 1,
    company: "Atlassian",
    logo: "A",
    logoColor: "bg-blue-500",
    position: "Product Manager",
    salary: "$90-120/hr",
    location: "Onsite, United Sates",
    timezone: "UTC-5",
    hours: "40 hrs/wk",
    postedDate: "Apr 8, 2025",
    skills: ["UX/UI", "Wireframing", "Tailwind CSS", "Typography"],
  },
  {
    id: 2,
    company: "Anima",
    logo: "A",
    logoColor: "bg-gradient-to-br from-yellow-400 to-pink-500",
    position: "Frontend Developer",
    salary: "$90-120/hr",
    location: "Remote, Asia",
    timezone: "GMT+1",
    hours: "20+ hrs/wk",
    postedDate: "Apr 8, 2025",
    skills: ["Django", "PostgreSQL", "SQL", "MySQL"],
  },
  {
    id: 3,
    company: "Airtable",
    logo: "▢",
    logoColor: "bg-gradient-to-br from-pink-500 to-yellow-400",
    position: "Full Stack Engineer",
    salary: "$50-70/hr",
    location: "Hybrid, Africa",
    timezone: "GMT+1",
    hours: "Under 20 hrs/wk",
    postedDate: "Apr 7, 2025",
    skills: ["Tailwind CSS", "HTML5", "CSS3", "TypeScript", "Web Animations"],
  },
  {
    id: 4,
    company: "Adobe",
    logo: "A",
    logoColor: "bg-red-600",
    position: "UI/UX Designer",
    salary: "$100,000/yr",
    location: "Onsite, Europe",
    timezone: "GMT+1",
    hours: "20+ hrs/wk",
    postedDate: "Apr 7, 2025",
    skills: ["UX/UI", "Typography", "User Research", "InVision", "Illustrator"],
  },
];

export default function Jobs() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search Jobs" 
            className="pl-9 bg-background border-border"
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {filters.map((filter) => (
            <Button 
              key={filter.label} 
              variant="outline" 
              size="sm"
              className="gap-2 border-border"
            >
              <filter.icon className="h-4 w-4" />
              {filter.label}
            </Button>
          ))}
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            <X className="h-4 w-4" />
            Clear Filters
          </Button>

          <span className="ml-auto text-sm text-muted-foreground">21 jobs found</span>
        </div>

        <p className="text-xs text-muted-foreground">+ Powered by CMS+</p>
      </div>

      {/* Job Listings */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Search Listings</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Sort by:</span>
            <button className="font-medium text-foreground hover:underline">Newest ∨</button>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="border-border">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className={`w-12 h-12 rounded-lg ${job.logoColor} flex items-center justify-center text-primary-foreground font-bold text-lg`}>
                    {job.logo}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{job.company}</h3>
                        <p className="text-sm text-muted-foreground">{job.position}</p>
                      </div>

                      <div className="text-right">
                        <button className="text-muted-foreground hover:text-foreground mb-1">
                          <Bookmark className="h-5 w-5" />
                        </button>
                        <p className="font-semibold text-foreground">{job.salary}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {job.timezone}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {job.hours}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">Posted {job.postedDate}</span>
                        <Button variant="outline" size="sm">View Job</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
