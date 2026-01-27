export default function StudentSkeleton() {
  return (
    <div className="min-h-screen bg-background pt-32 animate-pulse">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-24">
          <div className="h-10 w-48 bg-muted rounded-full mx-auto" />
          <div className="h-16 w-full bg-muted rounded-2xl" />
          <div className="h-6 w-2/3 bg-muted rounded-lg mx-auto" />
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[500px] bg-muted rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  )
}