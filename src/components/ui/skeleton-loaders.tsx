import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  className?: string;
  variant?: "default" | "large" | "horizontal";
}

export const SkeletonCard = ({ className, variant = "default" }: SkeletonCardProps) => {
  if (variant === "horizontal") {
    return (
      <div className={cn("bg-card rounded-2xl border border-border/50 overflow-hidden animate-pulse", className)}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 h-48 md:h-auto bg-muted" />
          <div className="flex-1 p-6 space-y-4">
            <div className="h-6 bg-muted rounded-lg w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-4/6" />
            </div>
            <div className="h-10 bg-muted rounded-lg w-32" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div className={cn("bg-card rounded-3xl border border-border/50 overflow-hidden animate-pulse", className)}>
        <div className="h-64 bg-muted" />
        <div className="p-8 space-y-4">
          <div className="h-8 bg-muted rounded-lg w-2/3" />
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
          </div>
          <div className="flex gap-2">
            <div className="h-6 bg-muted rounded-full w-20" />
            <div className="h-6 bg-muted rounded-full w-24" />
            <div className="h-6 bg-muted rounded-full w-16" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-card rounded-2xl border border-border/50 p-6 space-y-4 animate-pulse", className)}>
      <div className="w-14 h-14 bg-muted rounded-xl" />
      <div className="h-6 bg-muted rounded-lg w-2/3" />
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-4/5" />
      </div>
    </div>
  );
};

interface SkeletonTextProps {
  className?: string;
  lines?: number;
}

export const SkeletonText = ({ className, lines = 3 }: SkeletonTextProps) => {
  return (
    <div className={cn("space-y-2 animate-pulse", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-muted rounded"
          style={{ width: `${100 - i * 10}%` }}
        />
      ))}
    </div>
  );
};

interface SkeletonAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const SkeletonAvatar = ({ className, size = "md" }: SkeletonAvatarProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn("bg-muted rounded-full animate-pulse", sizeClasses[size], className)} />
  );
};
