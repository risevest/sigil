import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M1 11c5.523 0 10-4.477 10-10h2c0 5.523 4.477 10 10 10v2c-5.523 0-10 4.477-10 10h-2c0-5.523-4.477-10-10-10z" />
    </svg>
  )
})
Icon.displayName = 'ShiningFill'
/**
 * Remix Icon: Shining Fill
 * @see {@link https://remixicon.com/icon/shining-fill Remix Icon Docs}
 */
export const ShiningFill = Icon
