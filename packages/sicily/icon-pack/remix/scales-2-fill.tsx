import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5.998 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 0 1-3 3h-4l.001 2.062A8 8 0 0 1 19.998 15v6a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-6a8 8 0 0 1 7-7.938V5h-4c-1.66 0-3-1.34-3-3zm6 9a4 4 0 1 0 3.446 1.968l-2.739 2.74-.094.082a1 1 0 0 1-1.32-1.497l2.739-2.74A4 4 0 0 0 11.998 11" />
    </svg>
  )
})
Icon.displayName = 'Scales2Fill'
/**
 * Remix Icon: Scales 2 Fill
 * @see {@link https://remixicon.com/icon/scales-2-fill Remix Icon Docs}
 */
export const Scales2Fill = Icon
