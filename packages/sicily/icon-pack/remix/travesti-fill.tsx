import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7.537 9.95 4.662 7.076 2.187 9.55.772 8.136l6.364-6.364 1.415 1.414-2.475 2.475L8.95 8.537A7.5 7.5 0 1 1 7.537 9.95" />
    </svg>
  )
})
Icon.displayName = 'TravestiFill'
/**
 * Remix Icon: Travesti Fill
 * @see {@link https://remixicon.com/icon/travesti-fill Remix Icon Docs}
 */
export const TravestiFill = Icon
