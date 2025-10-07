import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17 9.2 5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zM5 8v2h2V8z" />
    </svg>
  )
})
Icon.displayName = 'VidiconFill'
/**
 * Remix Icon: Vidicon Fill
 * @see {@link https://remixicon.com/icon/vidicon-fill Remix Icon Docs}
 */
export const VidiconFill = Icon
