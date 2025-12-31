import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    id: 1,
    title: "The Top Skills Employers Are Looking For in 2024",
    description: "The job market evolves constantly, and knowing which skills are in demand can give you a competitive edge. ...",
    duration: "1:45",
    thumbnail: "bg-gradient-to-br from-zinc-800 to-zinc-600",
  },
  {
    id: 2,
    title: "Overcoming Employment Gaps on Your CV",
    description: "Gaps in employment can raise questions, but with the right approach, they can tell a story of growth and ...",
    duration: "0:47",
    thumbnail: "bg-gradient-to-br from-zinc-700 to-zinc-500",
  },
  {
    id: 3,
    title: "Personal Branding Through Your CV",
    description: "Your CV is more than a document; it's a reflection of who you are and what you bring to the table. Presenting a ...",
    duration: "7:39",
    thumbnail: "bg-gradient-to-br from-zinc-600 to-zinc-400",
  },
  {
    id: 4,
    title: "Mastering the Art of CV Formatting",
    description: "Your CV's format is the foundation of your job ...",
    duration: "1:10",
    thumbnail: "bg-gradient-to-br from-zinc-900 to-zinc-700",
  },
];

export default function Learn() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8 px-4 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-background">
        <Badge className="mb-4 bg-primary text-primary-foreground">Learn</Badge>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Guarantee Your Career Growth With The Right Resources.
        </h1>
        <p className="text-muted-foreground">
          Ensure Your Professional Development With Suitable Tools.
        </p>
      </div>

      {/* Video Resources */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Video Resources</h2>
          <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
            See all
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {videos.slice(0, 3).map((video) => (
            <Card key={video.id} className="border-border overflow-hidden">
              <div className={`aspect-video ${video.thumbnail} relative flex items-center justify-center`}>
                <button className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors">
                  <Play className="h-5 w-5 text-foreground ml-0.5" />
                </button>
                <span className="absolute bottom-2 right-2 text-xs text-primary-foreground bg-foreground/50 px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fourth video */}
        <div className="mt-6 w-1/3">
          <Card className="border-border overflow-hidden">
            <div className={`aspect-video ${videos[3].thumbnail} relative flex items-center justify-center`}>
              <button className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors">
                <Play className="h-5 w-5 text-foreground ml-0.5" />
              </button>
              <span className="absolute bottom-2 right-2 text-xs text-primary-foreground bg-foreground/50 px-1.5 py-0.5 rounded">
                {videos[3].duration}
              </span>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-2">{videos[3].title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{videos[3].description}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
