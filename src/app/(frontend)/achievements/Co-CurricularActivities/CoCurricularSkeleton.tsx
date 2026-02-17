export default function CoCurricularSkeleton() {
  return (
    <div className="py-24 container mx-auto px-4 animate-pulse">
      {/* Header Skeleton */}
      <div className="text-center mb-16 space-y-4">
        <div className="h-8 w-48 bg-muted rounded-full mx-auto" />
        <div className="h-16 w-3/4 bg-muted rounded-2xl mx-auto" />
        <div className="h-6 w-1/2 bg-muted rounded-lg mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Skeleton */}
        <div className="lg:col-span-1 space-y-4">
          <div className="h-80 bg-muted rounded-2xl w-full" />
        </div>

        {/* Content Skeleton */}
        <div className="lg:col-span-2 space-y-6">
          <div className="h-[500px] bg-muted rounded-2xl w-full" />
          <div className="h-24 bg-muted rounded-xl w-full" />
        </div>
      </div>
    </div>
  )
}