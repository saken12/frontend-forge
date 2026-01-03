import { Users, Search, Briefcase, FileText, UserCheck, Mail, Phone, MapPin, Calendar, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Test applicants data
const applicants = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    email: "ahmad.fauzi@email.com",
    phone: "+62 812-3456-7890",
    position: "Frontend Developer",
    location: "Jakarta, Indonesia",
    appliedDate: "2 Jan 2026",
    status: "pending",
    avatar: "",
    experience: "3 years",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    email: "siti.nurhaliza@email.com",
    phone: "+62 857-9876-5432",
    position: "UI/UX Designer",
    location: "Bandung, Indonesia",
    appliedDate: "1 Jan 2026",
    status: "reviewed",
    avatar: "",
    experience: "5 years",
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "+62 878-1234-5678",
    position: "Backend Developer",
    location: "Surabaya, Indonesia",
    appliedDate: "31 Dec 2025",
    status: "interviewed",
    avatar: "",
    experience: "4 years",
  },
];

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
      ) : (
        /* Applicants List */
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Applicant</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={applicant.avatar} alt={applicant.name} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {applicant.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{applicant.name}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {applicant.location}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-foreground">{applicant.position}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-muted-foreground">{applicant.experience}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {applicant.appliedDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          applicant.status === 'pending' ? 'secondary' :
                          applicant.status === 'reviewed' ? 'default' :
                          'outline'
                        }
                        className={
                          applicant.status === 'interviewed' ? 'bg-green-100 text-green-700 border-green-200' : ''
                        }
                      >
                        {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="h-4 w-4 mr-2" />
                            Call
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserCheck className="h-4 w-4 mr-2" />
                            Mark as Reviewed
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
