import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 65 64" width="1em" height="1em" {...props}>
      <rect width={64} height={64} x={0.5} fill="currentColor" rx={32} />
      <circle
        cx={32.5}
        cy={32}
        r={26}
        fill="currentColor"
        stroke="#222"
        strokeWidth={2}
      />
    </svg>
  )
})
Icon.displayName = 'CameraShutter'
export const CameraShutter = Icon
