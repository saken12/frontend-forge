import { Link, useNavigate } from "react-router-dom";
import { MoreHorizontal, Pencil, Trash2, Eye, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for posted jobs
const myJobs = [
  {
    id: 1,
    company: "My Company",
    logo: "M",
    logoColor: "bg-primary",
    position: "Product Manager",
    salary: "$90-120/hr",
    location: "Onsite, New York",
    postedDate: "Apr 8, 2025",
    status: "active",
    applicants: 12,
  },
  {
    id: 2,
    company: "My Company",
    logo: "M",
    logoColor: "bg-primary",
    position: "Frontend Developer",
    salary: "$80-100/hr",
    location: "Remote",
    postedDate: "Apr 5, 2025",
    status: "active",
    applicants: 8,
  },
  {
    id: 3,
    company: "My Company",
    logo: "M",
    logoColor: "bg-primary",
    position: "Backend Engineer",
    salary: "$100-130/hr",
    location: "Hybrid, London",
    postedDate: "Mar 28, 2025",
    status: "draft",
    applicants: 0,
  },
];

export default function MyJobs() {
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    // Navigate to edit page - you'll connect this to your backend
    navigate(`/post-job?edit=${id}`);
  };

  const handleDelete = (id: number) => {
    // Delete job - you'll connect this to your backend
    console.log("Delete job:", id);
  };

  const handleView = (id: number) => {
    navigate(`/jobs/${id}`);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Jobs</h1>
          <p className="text-muted-foreground">Manage your job postings</p>
        </div>
        <Button asChild>
          <Link to="/post-job">
            <PlusCircle className="h-4 w-4 mr-2" />
            Post New Job
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Jobs</p>
            <p className="text-2xl font-bold text-foreground">{myJobs.length}</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Active Jobs</p>
            <p className="text-2xl font-bold text-foreground">
              {myJobs.filter(j => j.status === "active").length}
            </p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Applicants</p>
            <p className="text-2xl font-bold text-foreground">
              {myJobs.reduce((sum, j) => sum + j.applicants, 0)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Job Listings */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Your Job Listings</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Sort by:</span>
            <button className="font-medium text-foreground hover:underline">Newest ∨</button>
          </div>
        </div>

        {myJobs.length === 0 ? (
          <Card className="border-border bg-secondary/50">
            <CardContent className="py-16 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <PlusCircle className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">No jobs posted yet</h2>
              <p className="text-muted-foreground mb-6">Create your first job listing to find great candidates</p>
              <Button asChild>
                <Link to="/post-job">Post Your First Job</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {myJobs.map((job) => (
              <Card key={job.id} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div
                      className={`w-12 h-12 rounded-lg ${job.logoColor} flex items-center justify-center text-primary-foreground font-bold text-lg`}
                    >
                      {job.logo}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{job.position}</h3>
                            <Badge 
                              variant={job.status === "active" ? "default" : "secondary"}
                              className="capitalize"
                            >
                              {job.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleView(job.id)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleEdit(job.id)}>
                                <Pencil className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleDelete(job.id)}
                                className="text-destructive"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{job.location}</span>
                          <span>{job.salary}</span>
                          <span>{job.applicants} applicants</span>
                        </div>
                        <span className="text-xs text-muted-foreground">Posted {job.postedDate}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
