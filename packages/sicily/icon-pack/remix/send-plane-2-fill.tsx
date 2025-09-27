import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.439l18.462 10.155a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154z" />
    </svg>
  )
})
Icon.displayName = 'SendPlane2Fill'
/**
 * Remix Icon: Send Plane 2 Fill
 * @see {@link https://remixicon.com/icon/send-plane-2-fill Remix Icon Docs}
 */
export const SendPlane2Fill = Icon
