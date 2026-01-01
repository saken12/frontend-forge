import { Bookmark, MapPin, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Sample job data
const recentJobs = [
  {
    id: 1,
    company: "Atlassian",
    logo: "A",
    logoColor: "bg-blue-500",
    position: "Product Manager",
    salary: "$90-120/hr",
    location: "Onsite, New York",
    timezone: "UTC-5",
    hours: "40 hrs/wk",
    postedDate: "Apr 8, 2025",
  },
  {
    id: 2,
    company: "Anima",
    logo: "A",
    logoColor: "bg-gradient-to-br from-yellow-400 to-pink-500",
    position: "Frontend Developer",
    salary: "$90-120/hr",
    location: "Remote, Europe",
    timezone: "GMT+1",
    hours: "20+ hrs/wk",
    postedDate: "Apr 8, 2025",
  },
  {
    id: 3,
    company: "Airtable",
    logo: "▢",
    logoColor: "bg-gradient-to-br from-pink-500 to-yellow-400",
    position: "Full Stack Engineer",
    salary: "$50-70/hr",
    location: "Hybrid, London",
    timezone: "GMT+1",
    hours: "Under 20 hrs/wk",
    postedDate: "Apr 7, 2025",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="flex gap-6">
        {/* Main intro */}
        <Card className="flex-1 border-border">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">Jobhunt</h1>
            <h2 className="text-lg font-semibold text-foreground mb-3">Start your job search</h2>
            <p className="text-muted-foreground text-sm">
              We stay true to our word. Your next role is here! Don't hold the ball - get it rolling.
            </p>
          </CardContent>
        </Card>

        {/* Info cards */}
        <Card className="w-56 border-border">
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-2">Search for Jobs</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We vet companies job vacancies before listing them. They are actually looking for you!
            </p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/jobs">See Job</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="w-56 border-border">
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-2">Get Helpful Tips</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We have curated resources to help you get better at hunting and applying for jobs.
            </p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/learn">See Resources</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Job Listings */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Recent Job Listings</h2>
          <Link to="/jobs" className="text-sm text-muted-foreground hover:text-foreground">
            See all jobs
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {recentJobs.map((job) => (
            <Card key={job.id} className="border-border">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${job.logoColor} flex items-center justify-center text-primary-foreground font-bold`}>
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{job.company}</h3>
                      <p className="text-sm text-muted-foreground">{job.position}</p>
                    </div>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>

                <p className="font-semibold text-foreground mb-3">{job.salary}</p>

                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{job.location}</span>
                    <Clock className="h-3.5 w-3.5 ml-2" />
                    <span>{job.timezone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{job.hours}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Posted {job.postedDate}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/jobs/${job.id}`}>View Job</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Saved Jobs */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Saved Jobs</h2>
          <Link to="/saved-jobs" className="text-sm text-muted-foreground hover:text-foreground">
            See all saved jobs
          </Link>
        </div>

        <Card className="border-border bg-secondary/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-muted flex items-center justify-center text-muted-foreground">
                +
              </div>
              <div>
                <h3 className="font-medium text-foreground">Saved Jobs</h3>
                <p className="text-sm text-muted-foreground">Jobs you save will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
