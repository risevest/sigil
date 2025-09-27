import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1M5 16v4h14v-4zm10 1h2v2h-2z" />
    </svg>
  )
})
Icon.displayName = 'HardDrive2Fill'
/**
 * Remix Icon: Hard Drive 2 Fill
 * @see {@link https://remixicon.com/icon/hard-drive-2-fill Remix Icon Docs}
 */
export const HardDrive2Fill = Icon
