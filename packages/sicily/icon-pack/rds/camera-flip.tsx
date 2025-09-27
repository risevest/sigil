import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <path
        fill="currentColor"
        d="M26.667 6.667h-4L20 4h-8L9.334 6.667h-4a2.675 2.675 0 0 0-2.667 2.666v16c0 1.48 1.2 2.667 2.667 2.667h21.333a2.66 2.66 0 0 0 2.667-2.667v-16a2.666 2.666 0 0 0-2.667-2.666M6.667 16h2.8c.733-3.613 4.253-5.933 7.867-5.2 1.013.2 1.906.653 2.666 1.2l-1.92 1.933c-.6-.373-1.306-.6-2.08-.6-1.68 0-3.2 1.067-3.76 2.667h2.427l-4 4zm15.88 2.667c-.733 3.613-4.253 5.933-7.88 5.2-1-.214-1.893-.654-2.667-1.2l1.92-1.934c.614.374 1.32.6 2.08.6a4 4 0 0 0 3.774-2.666h-2.44l4-4 4 4z"
      />
    </svg>
  )
})
Icon.displayName = 'CameraFlip'
export const CameraFlip = Icon
