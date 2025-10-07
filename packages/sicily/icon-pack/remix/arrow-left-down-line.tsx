import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m9 13.589 8.607-8.607 1.414 1.415-8.607 8.606H18v2H7v-11h2z" />
    </svg>
  )
})
Icon.displayName = 'ArrowLeftDownLine'
/**
 * Remix Icon: Arrow Left Down Line
 * @see {@link https://remixicon.com/icon/arrow-left-down-line Remix Icon Docs}
 */
export const ArrowLeftDownLine = Icon
