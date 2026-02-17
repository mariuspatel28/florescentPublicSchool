export default function ResultsSkeleton() {
  return (
    <div className="min-h-screen bg-background pt-32 animate-pulse">
      <div className="container mx-auto px-4 text-center space-y-8">
        {/* Badge and Title */}
        <div className="h-10 w-40 bg-muted rounded-full mx-auto" />
        <div className="h-20 w-3/4 bg-muted rounded-2xl mx-auto" />
        <div className="h-6 w-1/2 bg-muted rounded-lg mx-auto" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-muted rounded-2xl" />
          ))}
        </div>

        {/* Slider Skeleton */}
        <div className="mt-20 h-[500px] w-full bg-muted rounded-3xl max-w-4xl mx-auto" />
      </div>
    </div>
  )
}