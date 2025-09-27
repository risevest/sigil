import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21" />
    </svg>
  )
})
Icon.displayName = 'Cloudy2Fill'
/**
 * Remix Icon: Cloudy 2 Fill
 * @see {@link https://remixicon.com/icon/cloudy-2-fill Remix Icon Docs}
 */
export const Cloudy2Fill = Icon
