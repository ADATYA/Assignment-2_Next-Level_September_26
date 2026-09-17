export default function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-xl bg-surface ring-1 ring-white/5">
      <div className="aspect-[2/3] w-full animate-pulse bg-surface2" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-3/4 animate-pulse rounded bg-surface2" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-surface2" />
        <div className="h-9 w-full animate-pulse rounded-full bg-surface2" />
      </div>
    </div>
  )
}
