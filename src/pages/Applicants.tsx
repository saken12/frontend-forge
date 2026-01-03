import { Users, Search, Briefcase, FileText, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Empty state - no applicants yet
const applicants: never[] = [];

export default function Applicants() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8 px-4 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-background">
        <Badge className="mb-4 bg-primary text-primary-foreground">Applicants</Badge>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Manage Your Job Applicants
        </h1>
        <p className="text-muted-foreground">
          Review, filter, and connect with candidates who applied to your jobs.
        </p>
      </div>

      {/* Empty State */}
      {applicants.length === 0 ? (
        <Card className="border-border border-dashed">
          <CardContent className="py-16 px-8">
            <div className="flex flex-col items-center text-center max-w-md mx-auto">
              {/* Animated Icon Container */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                {/* Floating icons */}
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-muted flex items-center justify-center shadow-sm">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="absolute -bottom-1 -left-3 w-8 h-8 rounded-full bg-muted flex items-center justify-center shadow-sm">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="absolute top-1/2 -right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center shadow-sm">
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <h2 className="text-xl font-semibold text-foreground mb-2">
                No Applicants Yet
              </h2>
              <p className="text-muted-foreground mb-6">
                Once candidates start applying to your job postings, they'll appear here. 
                Post a job to start receiving applications from qualified candidates.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button asChild>
                  <Link to="/post-job">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Post a Job
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/jobs">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Jobs
                  </Link>
                </Button>
              </div>

              {/* Tips Section */}
              <div className="mt-10 pt-8 border-t border-border w-full">
                <h3 className="text-sm font-medium text-foreground mb-4">Tips to attract more applicants:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground text-center">Write clear job descriptions</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground text-center">Offer competitive salary</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <UserCheck className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground text-center">Respond to applicants quickly</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
