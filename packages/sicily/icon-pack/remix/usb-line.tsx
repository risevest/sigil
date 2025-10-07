import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 1 3 5h-2v7.381l3-1.499-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553A3.001 3.001 0 0 1 12 23a3 3 0 0 1-1.31-5.7L6 14l-.001-2.268a2 2 0 1 1 2.001 0V13l3 2.086V6H9zm0 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </svg>
  )
})
Icon.displayName = 'UsbLine'
/**
 * Remix Icon: Usb Line
 * @see {@link https://remixicon.com/icon/usb-line Remix Icon Docs}
 */
export const UsbLine = Icon
