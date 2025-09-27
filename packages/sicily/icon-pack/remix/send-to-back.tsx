import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2H7a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 5h-4v3a1 1 0 0 1-1 1H8v4h4v-3a1 1 0 0 1 1-1h3z" />
    </svg>
  )
})
Icon.displayName = 'SendToBack'
/**
 * Remix Icon: Send To Back
 * @see {@link https://remixicon.com/icon/send-to-back Remix Icon Docs}
 */
export const SendToBack = Icon
