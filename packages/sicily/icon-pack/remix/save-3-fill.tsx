import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 1v5h9V4zm-1 8v7h12v-7zm7-7h2v3h-2z" />
    </svg>
  )
})
Icon.displayName = 'Save3Fill'
/**
 * Remix Icon: Save 3 Fill
 * @see {@link https://remixicon.com/icon/save-3-fill Remix Icon Docs}
 */
export const Save3Fill = Icon
