import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 .5 16 8l7.5 4-7.5 4-4 7.5L8 16 .5 12 8 8z" />
    </svg>
  )
})
Icon.displayName = 'Shining2Fill'
/**
 * Remix Icon: Shining 2 Fill
 * @see {@link https://remixicon.com/icon/shining-2-fill Remix Icon Docs}
 */
export const Shining2Fill = Icon
