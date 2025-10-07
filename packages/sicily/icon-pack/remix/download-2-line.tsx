import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 10h5l-6 6-6-6h5V3h2zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2z" />
    </svg>
  )
})
Icon.displayName = 'Download2Line'
/**
 * Remix Icon: Download 2 Line
 * @see {@link https://remixicon.com/icon/download-2-line Remix Icon Docs}
 */
export const Download2Line = Icon
