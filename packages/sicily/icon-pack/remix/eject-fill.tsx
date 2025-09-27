import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12.416 3.624 7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0M5 17h14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2" />
    </svg>
  )
})
Icon.displayName = 'EjectFill'
/**
 * Remix Icon: Eject Fill
 * @see {@link https://remixicon.com/icon/eject-fill Remix Icon Docs}
 */
export const EjectFill = Icon
