
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { WriteReviewDialog } from "./WriteReviewDialog";

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  position: string;
}

const mockReviews: Review[] = [
  {
    id: 1,
    author: "John D.",
    avatar: "https://api.dicebear.com/7.x/micah/svg?seed=JohnD",
    rating: 5,
    date: "2 weeks ago",
    title: "Great company culture",
    content: "Amazing work environment with supportive team members. The onboarding process was smooth and management truly cares about employee growth. Highly recommend applying!",
    helpful: 12,
    position: "Software Engineer",
  },
  {
    id: 2,
    author: "Sarah M.",
    avatar: "https://api.dicebear.com/7.x/micah/svg?seed=SarahM",
    rating: 4,
    date: "1 month ago",
    title: "Good work-life balance",
    content: "The company offers excellent benefits and flexible working hours. The projects are interesting and challenging. Only downside is the office location could be better.",
    helpful: 8,
    position: "Product Manager",
  },
  {
    id: 3,
    author: "Mike R.",
    avatar: "https://api.dicebear.com/7.x/micah/svg?seed=MikeR",
    rating: 5,
    date: "2 months ago",
    title: "Best decision I made",
    content: "Joined 6 months ago and it's been incredible. Great learning opportunities, supportive management, and competitive compensation. The team is very collaborative.",
    helpful: 15,
    position: "UX Designer",
  },
];

interface ReviewSectionProps {
  companyName: string;
}

export function ReviewSection({ companyName }: ReviewSectionProps) {
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);

  const averageRating = 4.6;
  const totalReviews = mockReviews.length;

  const ratingDistribution = [
    { stars: 5, count: 2, percentage: 67 },
    { stars: 4, count: 1, percentage: 33 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Reviews</CardTitle>
            <Button variant="outline" onClick={() => setWriteReviewOpen(true)}>
              Write a Review
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(averageRating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on {totalReviews} reviews
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {ratingDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12">
                    <span className="text-sm text-muted-foreground">{dist.stars}</span>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  </div>
                  <Progress value={dist.percentage} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-8">
                    {dist.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            {mockReviews.map((review) => (
              <div key={review.id} className="space-y-3">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.author} />
                    <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <p className="font-medium text-foreground">{review.author}</p>
                        <p className="text-sm text-muted-foreground">{review.position}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{review.content}</p>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ThumbsUp className="h-3 w-3" />
                      Helpful ({review.helpful})
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <WriteReviewDialog
        open={writeReviewOpen}
        onOpenChange={setWriteReviewOpen}
        companyName={companyName}
      />
    </>
  );
}
