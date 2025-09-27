import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 15.632 8.968-4.748-.936-1.768L12 13.368 3.968 9.116l-.936 1.768z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDownWideFill'
/**
 * Remix Icon: Arrow Down Wide Fill
 * @see {@link https://remixicon.com/icon/arrow-down-wide-fill Remix Icon Docs}
 */
export const ArrowDownWideFill = Icon
