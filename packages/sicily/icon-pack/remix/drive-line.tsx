import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9.097 6.15 4.31 14.443l1.755 3.032 4.785-8.289zm-1.3 12.324h9.568l1.751-3.034H9.55zm11.314-5.034-4.786-8.29H10.83l4.787 8.29zM8.52 3.15h6.96L22 14.444l-3.48 6.03H5.49L2 14.444zm3.485 8.036-1.302 2.254h2.603z" />
    </svg>
  )
})
Icon.displayName = 'DriveLine'
/**
 * Remix Icon: Drive Line
 * @see {@link https://remixicon.com/icon/drive-line Remix Icon Docs}
 */
export const DriveLine = Icon
