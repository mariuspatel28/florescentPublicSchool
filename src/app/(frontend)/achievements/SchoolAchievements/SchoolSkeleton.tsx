export default function SchoolSkeleton() {
  return (
    <div className="min-h-screen bg-background pt-32 animate-pulse">
      <div className="container mx-auto px-4 space-y-16">
        {/* Hero Section Skeleton */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="h-10 w-48 bg-muted rounded-full mx-auto" />
          <div className="h-20 w-full bg-muted rounded-2xl" />
          <div className="h-6 w-3/4 bg-muted rounded-lg mx-auto" />
        </div>

        {/* Highlight Card Skeleton */}
        <div className="max-w-5xl mx-auto">
          <div className="h-48 w-full bg-muted rounded-3xl" />
        </div>

        {/* Stats Grid Skeleton */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-muted rounded-2xl" />
          ))}
        </div>

        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {[1, 2].map((i) => (
            <div key={i} className="aspect-video bg-muted rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  )
}