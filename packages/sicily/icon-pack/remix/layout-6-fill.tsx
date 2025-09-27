import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 10v11H3a1 1 0 0 1-1-1V10zm7 0v10a1 1 0 0 1-1 1h-4V10zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1z" />
    </svg>
  )
})
Icon.displayName = 'Layout6Fill'
/**
 * Remix Icon: Layout 6 Fill
 * @see {@link https://remixicon.com/icon/layout-6-fill Remix Icon Docs}
 */
export const Layout6Fill = Icon
