import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3.5 1.346a.5.5 0 0 1 .241.061l18.462 10.155a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V1.846a.5.5 0 0 1 .5-.5M5 4.382V11h5v2H5v6.617L18.85 12z" />
    </svg>
  )
})
Icon.displayName = 'SendPlane2Line'
/**
 * Remix Icon: Send Plane 2 Line
 * @see {@link https://remixicon.com/icon/send-plane-2-line Remix Icon Docs}
 */
export const SendPlane2Line = Icon
