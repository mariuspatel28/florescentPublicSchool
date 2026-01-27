export default function AboutSkeleton() {
  return (
    <div className="pt-24 space-y-20 animate-pulse">
      {/* Hero Skeleton */}
      <div className="container mx-auto px-4 text-center max-w-4xl space-y-6">
        <div className="h-8 w-32 bg-muted rounded-full mx-auto" />
        <div className="h-16 w-3/4 bg-muted rounded-xl mx-auto" />
        <div className="h-24 w-full bg-muted rounded-xl mx-auto" />
      </div>

      {/* Leadership Skeleton */}
      <div className="container mx-auto px-4 space-y-8">
        {[1, 2].map((i) => (
          <div key={i} className="h-80 w-full bg-muted rounded-3xl" />
        ))}
      </div>
    </div>
  )
}