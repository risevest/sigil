import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 13v-2h13.586V5.586L22 12l-6.414 6.414V13z" />
    </svg>
  )
})
Icon.displayName = 'ArrowRightLongFill'
/**
 * Remix Icon: Arrow Right Long Fill
 * @see {@link https://remixicon.com/icon/arrow-right-long-fill Remix Icon Docs}
 */
export const ArrowRightLongFill = Icon
