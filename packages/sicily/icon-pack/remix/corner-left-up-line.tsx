import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 19h9v-2h-7V6.828l3.95 3.95 1.414-1.414L11 3 4.636 9.364l1.414 1.414L10 6.828z" />
    </svg>
  )
})
Icon.displayName = 'CornerLeftUpLine'
/**
 * Remix Icon: Corner Left Up Line
 * @see {@link https://remixicon.com/icon/corner-left-up-line Remix Icon Docs}
 */
export const CornerLeftUpLine = Icon
