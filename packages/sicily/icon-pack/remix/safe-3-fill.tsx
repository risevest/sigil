import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h1v2h2v-2h12v2h2v-2h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12.35 5.236 1.332-1.332 1.414 1.414-1.333 1.333a3.76 3.76 0 0 1 0 3.698l1.333 1.333-1.414 1.414-1.333-1.333a3.76 3.76 0 0 1-3.698 0l-1.333 1.333-1.414-1.414 1.333-1.333a3.76 3.76 0 0 1 0-3.698L8.904 8.318l1.414-1.414 1.333 1.332a3.76 3.76 0 0 1 3.698 0m-.613 2.026a1.75 1.75 0 1 0-2.474 2.475 1.75 1.75 0 0 0 2.474-2.475M5 8h2v7H5z" />
    </svg>
  )
})
Icon.displayName = 'Safe3Fill'
/**
 * Remix Icon: Safe 3 Fill
 * @see {@link https://remixicon.com/icon/safe-3-fill Remix Icon Docs}
 */
export const Safe3Fill = Icon
