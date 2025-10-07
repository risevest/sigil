import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" />
    </svg>
  )
})
Icon.displayName = 'Heading'
/**
 * Remix Icon: Heading
 * @see {@link https://remixicon.com/icon/heading Remix Icon Docs}
 */
export const Heading = Icon
