export default function AdmissionSkeleton() {
  return (
    <div className="min-h-screen bg-background pt-32 animate-pulse">
      <div className="container mx-auto px-4 space-y-16">
        {/* Hero Skeleton */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="h-10 w-32 bg-muted rounded-full mx-auto" />
          <div className="h-16 w-full bg-muted rounded-2xl" />
          <div className="h-6 w-3/4 bg-muted rounded-lg mx-auto" />
        </div>

        {/* Process Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-muted rounded-2xl w-full" />
            ))}
          </div>
          <div className="lg:col-span-8 h-96 bg-muted rounded-3xl" />
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-muted rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  )
}