import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 12 19" width="1em" height="1em" {...props}>
      <path
        fill="currentColor"
        d="M.564 9.982 7.081.85c.311-.436.997-.144.898.383l-1.267 6.72a.5.5 0 0 0 .491.593h3.831a.5.5 0 0 1 .408.79L4.99 18.46c-.296.419-.956.173-.906-.337l.664-6.802a.5.5 0 0 0-.498-.548H.97a.5.5 0 0 1-.407-.79"
      />
    </svg>
  )
})
Icon.displayName = 'CameraFlash'
export const CameraFlash = Icon
