import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15.246 18H8.754l-1.6 4H5l6-15h2l6 15h-2.154zm-.8-2L12 9.885 9.554 16zM4 3h16v2H4z" />
    </svg>
  )
})
Icon.displayName = 'Overline'
/**
 * Remix Icon: Overline
 * @see {@link https://remixicon.com/icon/overline Remix Icon Docs}
 */
export const Overline = Icon
