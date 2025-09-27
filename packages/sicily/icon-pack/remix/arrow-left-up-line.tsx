import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m9.414 8 8.607 8.607-1.414 1.414L8 9.414V17H6V6h11v2z" />
    </svg>
  )
})
Icon.displayName = 'ArrowLeftUpLine'
/**
 * Remix Icon: Arrow Left Up Line
 * @see {@link https://remixicon.com/icon/arrow-left-up-line Remix Icon Docs}
 */
export const ArrowLeftUpLine = Icon
