import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <div className="p-6 max-w-sm mt-4 bg-secondary-background rounded-xl shadow-xl flex items-center space-x-4">
      <Skeleton
        baseColor="#202020"
        highlightColor="#444"
        className="w-14 h-5"
      />

      <Skeleton
        baseColor="#202020"
        highlightColor="#444"
        className="w-28 h-5"
      />
    </div>
  )
}
