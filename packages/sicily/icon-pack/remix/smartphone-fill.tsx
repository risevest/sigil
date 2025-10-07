import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m6 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </svg>
  )
})
Icon.displayName = 'SmartphoneFill'
/**
 * Remix Icon: Smartphone Fill
 * @see {@link https://remixicon.com/icon/smartphone-fill Remix Icon Docs}
 */
export const SmartphoneFill = Icon
