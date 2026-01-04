import { useState } from "react";
import { Send, Search, MoreVertical, Phone, Video, Paperclip, Smile, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const mockConversations = [
  {
    id: 1,
    name: "Atlassian HR",
    company: "Atlassian",
    avatar: "https://api.dicebear.com/7.x/micah/svg?seed=AtlassianHR",
    lastMessage: "We'd like to schedule an interview",
    timestamp: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    company: "Netflix",
    avatar: "https://api.dicebear.com/7.x/micah/svg?seed=SarahChen",
    lastMessage: "Thanks for your application",
    timestamp: "1h ago",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Mike Johnson",
    company: "Adobe",
    avatar: "https://api.dicebear.com/7.x/micah/svg?seed=MikeJohnson",
    lastMessage: "Can you provide more details about...",
    timestamp: "2h ago",
    unread: 1,
    online: false,
  },
  {
    id: 4,
    name: "Emma Wilson",
    company: "Spotify",
    avatar: "https://api.dicebear.com/7.x/micah/svg?seed=EmmaWilson",
    lastMessage: "Your resume looks great!",
    timestamp: "1d ago",
    unread: 0,
    online: false,
  },
];

const mockMessages = [
  {
    id: 1,
    senderId: 2,
    senderName: "Atlassian HR",
    message: "Hello! Thank you for applying to the Product Manager position.",
    timestamp: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    senderId: 1,
    senderName: "You",
    message: "Hi! Thank you for reaching out. I'm very interested in this opportunity.",
    timestamp: "10:32 AM",
    isOwn: true,
  },
  {
    id: 3,
    senderId: 2,
    senderName: "Atlassian HR",
    message: "Great! We've reviewed your application and would like to schedule an interview. Are you available next week?",
    timestamp: "10:35 AM",
    isOwn: false,
  },
  {
    id: 4,
    senderId: 1,
    senderName: "You",
    message: "Yes, I'm available next week. What days work best for you?",
    timestamp: "10:36 AM",
    isOwn: true,
  },
  {
    id: 5,
    senderId: 2,
    senderName: "Atlassian HR",
    message: "We'd like to schedule an interview",
    timestamp: "10:38 AM",
    isOwn: false,
  },
];

export default function Chat() {
  const isMobile = useIsMobile();
  const [selectedChat, setSelectedChat] = useState(mockConversations[0]);
  const [showChat, setShowChat] = useState(!isMobile);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleSelectChat = (conv: typeof mockConversations[0]) => {
    setSelectedChat(conv);
    if (isMobile) {
      setShowChat(true);
    }
  };

  const filteredConversations = mockConversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mobile: show either conversation list or chat
  if (isMobile) {
    if (showChat) {
      return (
        <Card className="h-[calc(100vh-8rem)] border-border flex flex-col">
          <div className="p-3 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setShowChat(false)}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div className="relative">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={selectedChat.avatar} alt={selectedChat.name} />
                  <AvatarFallback>{selectedChat.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {selectedChat.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{selectedChat.name}</p>
                <p className="text-xs text-muted-foreground">{selectedChat.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Video className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 p-3">
            <div className="space-y-3">
              {mockMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-2.5 ${
                      msg.isOwn
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.isOwn
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-3 border-t border-border">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 h-9"
              />
              <Button type="submit" size="icon" className="h-8 w-8" disabled={!message.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      );
    }

    return (
      <Card className="h-[calc(100vh-8rem)] border-border flex flex-col">
        <div className="p-3 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              className="pl-9 h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => handleSelectChat(conv)}
                className="w-full p-3 rounded-lg text-left transition-colors hover:bg-secondary"
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conv.avatar} alt={conv.name} />
                      <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-foreground text-sm truncate">
                        {conv.name}
                      </p>
                      <span className="text-xs text-muted-foreground ml-2">
                        {conv.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{conv.company}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {conv.lastMessage}
                    </p>
                  </div>
                  {conv.unread > 0 && (
                    <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {conv.unread}
                    </Badge>
                  )}
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </Card>
    );
  }

  // Desktop layout
  return (
    <div className="h-[calc(100vh-8rem)] flex gap-4">
      <Card className="w-80 border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedChat(conv)}
                className={`w-full p-3 rounded-lg text-left transition-colors ${
                  selectedChat.id === conv.id
                    ? "bg-accent"
                    : "hover:bg-secondary"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conv.avatar} alt={conv.name} />
                      <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-foreground text-sm truncate">
                        {conv.name}
                      </p>
                      <span className="text-xs text-muted-foreground ml-2">
                        {conv.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{conv.company}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {conv.lastMessage}
                    </p>
                  </div>
                  {conv.unread > 0 && (
                    <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {conv.unread}
                    </Badge>
                  )}
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </Card>

      <Card className="flex-1 border-border flex flex-col">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar>
                <AvatarImage src={selectedChat.avatar} alt={selectedChat.name} />
                <AvatarFallback>{selectedChat.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {selectedChat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            <div>
              <p className="font-semibold text-foreground">{selectedChat.name}</p>
              <p className="text-sm text-muted-foreground">{selectedChat.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Profile</DropdownMenuItem>
                <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
                <DropdownMenuItem>Archive</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete Chat</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {mockMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    msg.isOwn
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.isOwn
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button type="button" variant="ghost" size="icon">
              <Smile className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={!message.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
