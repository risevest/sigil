import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9.975 8.975a3.5 3.5 0 1 0-4.95 0L7.5 11.45zM7.5 14.278 3.61 10.39a5.5 5.5 0 1 1 7.78 0zM7.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9 12.45 2.475-2.475a3.5 3.5 0 1 0-4.95 0zm3.89-1.06-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0M16.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  )
})
Icon.displayName = 'PinDistanceLine'
/**
 * Remix Icon: Pin Distance Line
 * @see {@link https://remixicon.com/icon/pin-distance-line Remix Icon Docs}
 */
export const PinDistanceLine = Icon
