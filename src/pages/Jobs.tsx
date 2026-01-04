import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Clock, Briefcase, Calendar, Building, X, Bookmark, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const filterOptions = {
  location: ["United States", "Europe", "Asia", "Africa", "Remote"],
  timezone: ["UTC-8", "UTC-5", "UTC+0", "GMT+1", "UTC+8"],
  jobType: ["Engineering", "Design", "Product", "Marketing"],
  commitment: ["Full-time", "Part-time", "Contract", "Freelance"],
  workModel: ["Remote", "Onsite", "Hybrid"],
};

const jobs = [
  {
    id: 1,
    company: "Atlassian",
    logo: "https://api.dicebear.com/7.x/micah/svg?seed=Atlassian",
    position: "Product Manager",
    salary: "$90-120/hr",
    location: "Onsite, United States",
    timezone: "UTC-5",
    hours: "40 hrs/wk",
    postedDate: "Apr 8, 2025",
    skills: ["UX/UI", "Wireframing", "Tailwind CSS", "Typography"],
    workModel: "Onsite",
    commitment: "Full-time",
    jobType: "Product",
  },
  {
    id: 2,
    company: "Anima",
    logo: "https://api.dicebear.com/7.x/micah/svg?seed=Anima",
    position: "Frontend Developer",
    salary: "$90-120/hr",
    location: "Remote, Asia",
    timezone: "UTC+8",
    hours: "20+ hrs/wk",
    postedDate: "Apr 8, 2025",
    skills: ["Django", "PostgreSQL", "SQL", "MySQL"],
    workModel: "Remote",
    commitment: "Part-time",
    jobType: "Engineering",
  },
  {
    id: 3,
    company: "Airtable",
    logo: "https://api.dicebear.com/7.x/micah/svg?seed=Airtable",
    position: "Full Stack Engineer",
    salary: "$50-70/hr",
    location: "Hybrid, Africa",
    timezone: "GMT+1",
    hours: "Under 20 hrs/wk",
    postedDate: "Apr 7, 2025",
    skills: ["Tailwind CSS", "HTML5", "CSS3", "TypeScript", "Web Animations"],
    workModel: "Hybrid",
    commitment: "Contract",
    jobType: "Engineering",
  },
  {
    id: 4,
    company: "Adobe",
    logo: "https://api.dicebear.com/7.x/micah/svg?seed=Adobe",
    position: "UI/UX Designer",
    salary: "$100,000/yr",
    location: "Onsite, Europe",
    timezone: "GMT+1",
    hours: "20+ hrs/wk",
    postedDate: "Apr 7, 2025",
    skills: ["UX/UI", "Typography", "User Research", "InVision", "Illustrator"],
    workModel: "Onsite",
    commitment: "Full-time",
    jobType: "Design",
  },
];

type FilterKey = keyof typeof filterOptions;

type SortOption = "newest" | "oldest" | "salary-high" | "salary-low";

export default function Jobs() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [activeFilters, setActiveFilters] = useState<Record<FilterKey, string | null>>({
    location: null,
    timezone: null,
    jobType: null,
    commitment: null,
    workModel: null,
  });

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "salary-high", label: "Salary (High to Low)" },
    { value: "salary-low", label: "Salary (Low to High)" },
  ];

  const handleFilterSelect = (filterKey: FilterKey, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey] === value ? null : value,
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      location: null,
      timezone: null,
      jobType: null,
      commitment: null,
      workModel: null,
    });
    setSearchQuery("");
  };

  const filteredJobs = useMemo(() => {
    const filtered = jobs.filter((job) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          job.company.toLowerCase().includes(query) ||
          job.position.toLowerCase().includes(query) ||
          job.skills.some((skill) => skill.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Location filter
      if (activeFilters.location) {
        if (!job.location.toLowerCase().includes(activeFilters.location.toLowerCase())) {
          return false;
        }
      }

      // Timezone filter
      if (activeFilters.timezone) {
        if (job.timezone !== activeFilters.timezone) {
          return false;
        }
      }

      // Job Type filter
      if (activeFilters.jobType) {
        if (job.jobType !== activeFilters.jobType) {
          return false;
        }
      }

      // Commitment filter
      if (activeFilters.commitment) {
        if (job.commitment !== activeFilters.commitment) {
          return false;
        }
      }

      // Work Model filter
      if (activeFilters.workModel) {
        if (job.workModel !== activeFilters.workModel) {
          return false;
        }
      }

      return true;
    });

    // Sort jobs
    const parseDate = (dateStr: string) => new Date(dateStr).getTime();
    const parseSalary = (salaryStr: string) => {
      const num = parseInt(salaryStr.replace(/[^0-9]/g, ""), 10);
      return isNaN(num) ? 0 : num;
    };

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return parseDate(b.postedDate) - parseDate(a.postedDate);
        case "oldest":
          return parseDate(a.postedDate) - parseDate(b.postedDate);
        case "salary-high":
          return parseSalary(b.salary) - parseSalary(a.salary);
        case "salary-low":
          return parseSalary(a.salary) - parseSalary(b.salary);
        default:
          return 0;
      }
    });
  }, [searchQuery, activeFilters, sortBy]);

  const hasActiveFilters = Object.values(activeFilters).some((v) => v !== null) || searchQuery;

  const filters: { key: FilterKey; icon: typeof MapPin; label: string }[] = [
    { key: "location", icon: MapPin, label: "Location" },
    { key: "timezone", icon: Clock, label: "Timezone" },
    { key: "jobType", icon: Briefcase, label: "Job Type" },
    { key: "commitment", icon: Calendar, label: "Commitment" },
    { key: "workModel", icon: Building, label: "Work Model" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Jobs"
            className="pl-9 bg-background border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {filters.map((filter) => (
            <DropdownMenu key={filter.key}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={activeFilters[filter.key] ? "default" : "outline"}
                  size="sm"
                  className="gap-2 border-border"
                >
                  <filter.icon className="h-4 w-4" />
                  {activeFilters[filter.key] || filter.label}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {filterOptions[filter.key].map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => handleFilterSelect(filter.key, option)}
                    className={activeFilters[filter.key] === option ? "bg-accent" : ""}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground" onClick={clearFilters}>
              <X className="h-4 w-4" />
              Clear Filters
            </Button>
          )}

          <span className="ml-auto text-sm text-muted-foreground">{filteredJobs.length} jobs found</span>
        </div>
      </div>

      {/* Job Listings */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Search Listings</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Sort by:</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 font-medium text-foreground h-auto p-0 hover:bg-transparent">
                  {sortOptions.find((opt) => opt.value === sortBy)?.label}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={sortBy === option.value ? "bg-accent" : ""}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <Card className="border-border">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">No jobs found matching your criteria.</p>
                <Button variant="link" onClick={clearFilters} className="mt-2">
                  Clear all filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            filteredJobs.map((job) => (
              <Card key={job.id} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg bg-muted" />

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
                          <Button variant="outline" size="sm" onClick={() => navigate(`/jobs/${job.id}`)}>
                            View Job
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
