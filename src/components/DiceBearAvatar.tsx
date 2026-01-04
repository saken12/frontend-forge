import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface DiceBearAvatarProps {
  seed: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "user" | "company";
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
};

/**
 * Generate a DiceBear avatar URL using Micah style
 * @param seed - Unique identifier for consistent avatar generation
 * @returns DiceBear avatar URL
 */
export function generateAvatarUrl(seed: string): string {
  const sanitizedSeed = encodeURIComponent(seed.replace(/\s+/g, ""));
  return `https://api.dicebear.com/7.x/micah/svg?seed=${sanitizedSeed}`;
}

/**
 * Generate a random avatar URL with timestamp for uniqueness
 * @param baseSeed - Base seed to combine with random factor
 * @returns DiceBear avatar URL with random seed
 */
export function generateRandomAvatarUrl(baseSeed?: string): string {
  const randomPart = Math.random().toString(36).substring(2, 10);
  const seed = baseSeed ? `${baseSeed}-${randomPart}` : randomPart;
  return generateAvatarUrl(seed);
}

/**
 * Get initials from a name for fallback display
 * @param name - Full name
 * @returns Initials (max 2 characters)
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}

export function DiceBearAvatar({
  seed,
  fallback,
  size = "md",
  className,
  variant = "user",
}: DiceBearAvatarProps) {
  const avatarUrl = generateAvatarUrl(seed);
  const initials = fallback || getInitials(seed);

  return (
    <Avatar className={cn(sizeClasses[size], className)}>
      <AvatarImage src={avatarUrl} alt={seed} />
      <AvatarFallback
        className={cn(
          variant === "user"
            ? "bg-primary/10 text-primary"
            : "bg-muted text-muted-foreground"
        )}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}

interface DiceBearLogoProps {
  seed: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const logoSizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

export function DiceBearLogo({
  seed,
  alt,
  size = "md",
  className,
}: DiceBearLogoProps) {
  const logoUrl = generateAvatarUrl(seed);

  return (
    <img
      src={logoUrl}
      alt={alt || seed}
      className={cn(logoSizeClasses[size], "rounded-lg bg-muted", className)}
    />
  );
}
