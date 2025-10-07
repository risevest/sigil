import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 5.07A7.005 7.005 0 0 0 5.07 11H7v2H5.07A7 7 0 0 0 11 18.93V17h2v1.93A7 7 0 0 0 18.93 13H17v-2h1.93A7 7 0 0 0 13 5.07V7h-2zM3.055 11A9.004 9.004 0 0 1 11 3.055V1h2v2.055A9.004 9.004 0 0 1 20.945 11H23v2h-2.055A9.004 9.004 0 0 1 13 20.945V23h-2v-2.055A9.004 9.004 0 0 1 3.055 13H1v-2zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  )
})
Icon.displayName = 'Crosshair2Line'
/**
 * Remix Icon: Crosshair 2 Line
 * @see {@link https://remixicon.com/icon/crosshair-2-line Remix Icon Docs}
 */
export const Crosshair2Line = Icon
