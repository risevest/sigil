import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.998 10.341v2.194A4 4 0 1 0 13.463 18h2.193a6 6 0 1 1-7.658-7.66m4 6.659a3 3 0 0 1-3-3v-4c0-1.044.534-1.964 1.343-2.501a3 3 0 1 1 3.314.003A2.99 2.99 0 0 1 14.998 10v4.999l1.434.001a2 2 0 0 1 1.626.836l.089.135 2.709 4.514-1.715 1.03L16.43 17l-1.433-.001zm0-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.999l.001-5a1 1 0 0 0-1-1m0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </Svg>
  )
})
Icon.displayName = 'WheelchairLine'
/**
 * Remix Icon: Wheelchair Line
 * @see {@link https://remixicon.com/icon/wheelchair-line Remix Icon Docs}
 */
export const WheelchairLine = Icon
