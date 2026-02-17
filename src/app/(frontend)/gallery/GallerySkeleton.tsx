export default function GallerySkeleton() {
  return (
    <div className="min-h-screen bg-background pt-32 animate-pulse">
      <div className="container mx-auto px-4 space-y-12">
        {/* Hero Skeleton */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="h-12 w-3/4 bg-muted rounded-xl mx-auto" />
          <div className="h-6 w-1/2 bg-muted rounded-lg mx-auto" />
        </div>

        {/* Filter Skeleton */}
        <div className="flex justify-center gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-24 bg-muted rounded-full" />
          ))}
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-4/3 bg-muted rounded-2rem" />
              <div className="h-6 w-2/3 bg-muted rounded-lg" />
              <div className="h-4 w-full bg-muted rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}