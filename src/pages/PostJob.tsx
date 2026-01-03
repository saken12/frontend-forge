import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, MapPin, DollarSign, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

export default function PostJob() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    description: "",
    workModel: "",
    location: "",
    timezone: "",
    salaryMin: "",
    salaryMax: "",
    salaryType: "",
    commitment: "",
    skills: "",
    jobType: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePublish = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Job published:", formData);
    
    toast({
      title: "Job published!",
      description: "Your job listing is now live.",
    });
    
    setIsSubmitting(false);
    navigate("/my-jobs");
  };

  const handleSaveDraft = async () => {
    console.log("Draft saved:", formData);
    toast({
      title: "Draft saved",
      description: "Your job listing has been saved as a draft.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Post a Job</h1>
        <p className="text-muted-foreground">Create a new job listing</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Job Details
          </CardTitle>
          <CardDescription>Basic information about the position</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input 
              id="company" 
              placeholder="e.g., Atlassian" 
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Position Title</Label>
            <Input 
              id="position" 
              placeholder="e.g., Product Manager" 
              value={formData.position}
              onChange={(e) => handleChange("position", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe the role, responsibilities, and requirements..."
              className="min-h-[150px]"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Location & Work Model
          </CardTitle>
          <CardDescription>Where and how the work will be done</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
            <div className="space-y-2">
              <Label>Work Model</Label>
              <Select value={formData.workModel} onValueChange={(v) => handleChange("workModel", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select work model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="onsite">Onsite</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                placeholder="e.g., United States" 
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Timezone</Label>
            <Select value={formData.timezone} onValueChange={(v) => handleChange("timezone", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-8">UTC-8 (Pacific)</SelectItem>
                <SelectItem value="utc-5">UTC-5 (Eastern)</SelectItem>
                <SelectItem value="utc+0">UTC+0 (GMT)</SelectItem>
                <SelectItem value="utc+1">UTC+1 (CET)</SelectItem>
                <SelectItem value="utc+8">UTC+8 (Asia)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Compensation & Commitment
          </CardTitle>
          <CardDescription>Salary and working hours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
            <div className="space-y-2">
              <Label htmlFor="salaryMin">Minimum Salary</Label>
              <Input 
                id="salaryMin" 
                placeholder="e.g., 90000" 
                type="number" 
                value={formData.salaryMin}
                onChange={(e) => handleChange("salaryMin", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salaryMax">Maximum Salary</Label>
              <Input 
                id="salaryMax" 
                placeholder="e.g., 120000" 
                type="number" 
                value={formData.salaryMax}
                onChange={(e) => handleChange("salaryMax", e.target.value)}
              />
            </div>
          </div>

          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
            <div className="space-y-2">
              <Label>Salary Type</Label>
              <Select value={formData.salaryType} onValueChange={(v) => handleChange("salaryType", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Per Hour</SelectItem>
                  <SelectItem value="yearly">Per Year</SelectItem>
                  <SelectItem value="monthly">Per Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Commitment</Label>
              <Select value={formData.commitment} onValueChange={(v) => handleChange("commitment", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select commitment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time (40 hrs/wk)</SelectItem>
                  <SelectItem value="part-time-20">Part-time (20+ hrs/wk)</SelectItem>
                  <SelectItem value="part-time">Part-time (Under 20 hrs/wk)</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            Skills & Tags
          </CardTitle>
          <CardDescription>Required skills for the position</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="skills">Skills (comma separated)</Label>
            <Input 
              id="skills" 
              placeholder="e.g., React, TypeScript, Node.js, PostgreSQL" 
              value={formData.skills}
              onChange={(e) => handleChange("skills", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Job Type</Label>
            <Select value={formData.jobType} onValueChange={(v) => handleChange("jobType", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className={`flex items-center ${isMobile ? 'flex-col' : 'flex-row justify-end'} gap-4`}>
        <Button variant="outline" onClick={handleSaveDraft} className={isMobile ? 'w-full' : ''}>Save as Draft</Button>
        <Button onClick={handlePublish} disabled={isSubmitting} className={isMobile ? 'w-full' : ''}>
          {isSubmitting ? "Publishing..." : "Publish Job"}
        </Button>
      </div>
    </div>
  );
}
