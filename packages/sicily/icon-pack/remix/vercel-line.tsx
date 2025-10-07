import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M23 21.648 12 2.352 1 21.648zm-3.442-2H4.442L12 6.39z" />
    </svg>
  )
})
Icon.displayName = 'VercelLine'
/**
 * Remix Icon: Vercel Line
 * @see {@link https://remixicon.com/icon/vercel-line Remix Icon Docs}
 */
export const VercelLine = Icon
