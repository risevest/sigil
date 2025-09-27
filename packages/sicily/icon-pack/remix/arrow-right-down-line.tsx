import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14.59 16.003 5.983 7.397l1.414-1.415 8.607 8.607V7.003h2v11h-11v-2z" />
    </svg>
  )
})
Icon.displayName = 'ArrowRightDownLine'
/**
 * Remix Icon: Arrow Right Down Line
 * @see {@link https://remixicon.com/icon/arrow-right-down-line Remix Icon Docs}
 */
export const ArrowRightDownLine = Icon
