import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m18.364 19.778 1.414-1.414-9.606-9.607L14 4.93H4.929V14l3.828-3.828z" />
    </svg>
  )
})
Icon.displayName = 'ArrowLeftUpLongFill'
/**
 * Remix Icon: Arrow Left Up Long Fill
 * @see {@link https://remixicon.com/icon/arrow-left-up-long-fill Remix Icon Docs}
 */
export const ArrowLeftUpLongFill = Icon
