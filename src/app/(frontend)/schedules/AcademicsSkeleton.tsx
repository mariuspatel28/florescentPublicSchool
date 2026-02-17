export default function AcademicsSkeleton() {
  return (
    <div className="min-h-screen bg-background pt-32 animate-pulse">
      <div className="container mx-auto px-4 space-y-16">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="h-12 w-3/4 bg-muted rounded-xl mx-auto" />
          <div className="h-6 w-1/2 bg-muted rounded-lg mx-auto" />
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="h-40 bg-muted rounded-2xl" />
          ))}
        </div>

        {/* Table Skeleton */}
        <div className="space-y-4">
          <div className="h-8 w-48 bg-muted rounded-lg" />
          <div className="h-64 bg-muted rounded-2xl w-full" />
        </div>
      </div>
    </div>
  )
}