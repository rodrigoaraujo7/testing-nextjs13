import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <SkeletonTheme
      width={500}
      height={100}
      baseColor="#202020"
      highlightColor="#444"
    >
      <Skeleton count={3} />
    </SkeletonTheme>
  )
}
