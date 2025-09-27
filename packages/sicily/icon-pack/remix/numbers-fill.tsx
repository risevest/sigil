import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 18H4v-8h5zm6 0h-5V6h5zm6 0h-5V2h5zm1 4H3v-2h19z" />
    </svg>
  )
})
Icon.displayName = 'NumbersFill'
/**
 * Remix Icon: Numbers Fill
 * @see {@link https://remixicon.com/icon/numbers-fill Remix Icon Docs}
 */
export const NumbersFill = Icon
