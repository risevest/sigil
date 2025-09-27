import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 6v8h8a8 8 0 1 1-16 0c0-4.335 3.58-8 8-8m10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2z" />
    </svg>
  )
})
Icon.displayName = 'RestTimeFill'
/**
 * Remix Icon: Rest Time Fill
 * @see {@link https://remixicon.com/icon/rest-time-fill Remix Icon Docs}
 */
export const RestTimeFill = Icon
