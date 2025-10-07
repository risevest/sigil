import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 22h2V8.414h5.414L12 2 5.586 8.414H11z" />
    </svg>
  )
})
Icon.displayName = 'ArrowUpLongFill'
/**
 * Remix Icon: Arrow Up Long Fill
 * @see {@link https://remixicon.com/icon/arrow-up-long-fill Remix Icon Docs}
 */
export const ArrowUpLongFill = Icon
