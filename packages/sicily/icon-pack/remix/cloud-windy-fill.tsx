import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 19v-3.993H2.074a8 8 0 1 1 14.383-6.908A5.5 5.5 0 1 1 17.5 19zm-8 2h10v2H6zm-4-4h10v2H2z" />
    </svg>
  )
})
Icon.displayName = 'CloudWindyFill'
/**
 * Remix Icon: Cloud Windy Fill
 * @see {@link https://remixicon.com/icon/cloud-windy-fill Remix Icon Docs}
 */
export const CloudWindyFill = Icon
