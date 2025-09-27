import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4v-4h16v4a4 4 0 0 1-4 4zm4-12h2a1 1 0 0 1 1 1v2H4V7a1 1 0 0 1 1-1h2V2h2v4h6V2h2zm-5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 2h2v3h-2z" />
    </svg>
  )
})
Icon.displayName = 'Plug2Fill'
/**
 * Remix Icon: Plug 2 Fill
 * @see {@link https://remixicon.com/icon/plug-2-fill Remix Icon Docs}
 */
export const Plug2Fill = Icon
