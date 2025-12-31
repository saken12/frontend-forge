import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SavedJobs() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-foreground">Saved Jobs</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Sort by:</span>
          <button className="font-medium text-foreground hover:underline">Newest ∨</button>
        </div>
      </div>

      {/* Empty State */}
      <Card className="border-border bg-gradient-to-b from-secondary/30 to-secondary/50">
        <CardContent className="py-16 flex flex-col items-center justify-center text-center">
          {/* Illustration */}
          <div className="w-32 h-32 mb-6 relative">
            <div className="absolute inset-0 bg-secondary rounded-2xl"></div>
            <div className="absolute inset-4 bg-background rounded-xl shadow-sm flex flex-col items-center justify-center">
              <div className="w-12 h-8 border-2 border-border rounded mb-2"></div>
              <div className="flex gap-1">
                <div className="w-8 h-2 bg-border rounded"></div>
                <div className="w-8 h-2 bg-border rounded"></div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-muted rounded-full flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-foreground mb-2">Saved Job will appear here</h2>
          <p className="text-muted-foreground mb-6">Save Jobs to see them appear here</p>
          
          <Button variant="outline" asChild>
            <Link to="/jobs">Browse Jobs</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
