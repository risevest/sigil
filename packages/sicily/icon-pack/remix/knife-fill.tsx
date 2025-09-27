import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22.374 19.44a1.5 1.5 0 1 1-2.121 2.12l-4.596-4.595L12.12 20.5l-7.778-7.778A8 8 0 0 1 4.17 1.587l.173-.179z" />
    </svg>
  )
})
Icon.displayName = 'KnifeFill'
/**
 * Remix Icon: Knife Fill
 * @see {@link https://remixicon.com/icon/knife-fill Remix Icon Docs}
 */
export const KnifeFill = Icon
