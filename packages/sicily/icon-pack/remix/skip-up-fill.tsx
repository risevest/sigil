import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 7h12v2H6zm6 4-6 6h12z" />
    </svg>
  )
})
Icon.displayName = 'SkipUpFill'
/**
 * Remix Icon: Skip Up Fill
 * @see {@link https://remixicon.com/icon/skip-up-fill Remix Icon Docs}
 */
export const SkipUpFill = Icon
