import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15.387 13.498 2.553 7.014-4.698 1.71-2.553-7.014-3.899 2.445 1.619-16.02 11.537 11.232zm-.01 5.818-2.715-7.46 2.96-.41-5.64-5.49-.791 7.83 2.531-1.587 2.715 7.46z" />
    </Svg>
  )
})
Icon.displayName = 'CursorLine'
/**
 * Remix Icon: Cursor Line
 * @see {@link https://remixicon.com/icon/cursor-line Remix Icon Docs}
 */
export const CursorLine = Icon
