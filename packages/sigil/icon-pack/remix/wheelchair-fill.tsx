import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.998 10.341v2.194A4 4 0 1 0 13.463 18h2.193a6 6 0 1 1-7.658-7.66m4 6.659a3 3 0 0 1-3-3v-4a3 3 0 1 1 6 0v5h1.434a2 2 0 0 1 1.626.836l.089.135 2.709 4.514-1.715 1.03L16.43 17zm0-15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
    </Svg>
  )
})
Icon.displayName = 'WheelchairFill'
/**
 * Remix Icon: Wheelchair Fill
 * @see {@link https://remixicon.com/icon/wheelchair-fill Remix Icon Docs}
 */
export const WheelchairFill = Icon
