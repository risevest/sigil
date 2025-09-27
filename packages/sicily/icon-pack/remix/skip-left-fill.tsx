import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 18V6h2v12zm4-6 6-6v12z" />
    </svg>
  )
})
Icon.displayName = 'SkipLeftFill'
/**
 * Remix Icon: Skip Left Fill
 * @see {@link https://remixicon.com/icon/skip-left-fill Remix Icon Docs}
 */
export const SkipLeftFill = Icon
