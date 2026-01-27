export default function ContactSkeleton() {
  return (
    <div className="min-h-screen bg-background pt-32 animate-pulse">
      <div className="container mx-auto px-4 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="h-12 w-3/4 bg-muted rounded-xl mx-auto" />
          <div className="h-6 w-1/2 bg-muted rounded-lg mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="h-[500px] bg-muted rounded-2xl" />
          <div className="lg:col-span-2 h-[500px] bg-muted rounded-2xl" />
        </div>
      </div>
    </div>
  )
}