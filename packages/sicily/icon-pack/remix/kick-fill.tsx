import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h18v18H3zm7.564 2.536h-4.31v12.928h4.31V15.59H12v1.436h1.436v1.436h4.31v-4.309h-1.437v-1.436h-1.436v-1.436h1.436V9.845h1.436V5.536h-4.309v1.436H12V8.41h-1.436z" />
    </svg>
  )
})
Icon.displayName = 'KickFill'
/**
 * Remix Icon: Kick Fill
 * @see {@link https://remixicon.com/icon/kick-fill Remix Icon Docs}
 */
export const KickFill = Icon
