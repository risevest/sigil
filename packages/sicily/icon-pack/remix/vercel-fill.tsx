import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M23 21.648H1L12 2.352z" />
    </svg>
  )
})
Icon.displayName = 'VercelFill'
/**
 * Remix Icon: Vercel Fill
 * @see {@link https://remixicon.com/icon/vercel-fill Remix Icon Docs}
 */
export const VercelFill = Icon
