import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0M8 16a4 4 0 0 0 8 0z" />
    </svg>
  )
})
Icon.displayName = 'TempColdFill'
/**
 * Remix Icon: Temp Cold Fill
 * @see {@link https://remixicon.com/icon/temp-cold-fill Remix Icon Docs}
 */
export const TempColdFill = Icon
