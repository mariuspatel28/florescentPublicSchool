export default function CareerSkeleton() {
  return (
    <div className="min-h-screen bg-background pt-32 animate-pulse">
      <div className="container mx-auto px-4 space-y-16">
        {/* Hero Skeleton */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <div className="h-16 w-full bg-muted rounded-2xl" />
          <div className="h-6 w-3/4 bg-muted rounded-lg mx-auto" />
        </div>

        {/* Benefits Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 bg-muted rounded-2xl w-full" />
          ))}
        </div>

        {/* Jobs List Skeleton */}
        <div className="space-y-6 pt-12">
          <div className="h-10 w-48 bg-muted rounded-lg mb-8" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-muted rounded-3xl w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}