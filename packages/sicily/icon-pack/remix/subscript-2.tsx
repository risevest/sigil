import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 6v13H9V6H3V4h14v2zm8.55 10.58a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 1 1 21 16c0 .573-.24 1.09-.626 1.454L18.744 19H21v1h-4v-1z" />
    </svg>
  )
})
Icon.displayName = 'Subscript2'
/**
 * Remix Icon: Subscript 2
 * @see {@link https://remixicon.com/icon/subscript-2 Remix Icon Docs}
 */
export const Subscript2 = Icon
