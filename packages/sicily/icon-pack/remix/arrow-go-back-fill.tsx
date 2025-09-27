import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12z" />
    </svg>
  )
})
Icon.displayName = 'ArrowGoBackFill'
/**
 * Remix Icon: Arrow Go Back Fill
 * @see {@link https://remixicon.com/icon/arrow-go-back-fill Remix Icon Docs}
 */
export const ArrowGoBackFill = Icon
