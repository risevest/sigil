import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m.5 3a3.5 3.5 0 0 1 1.82 6.49L16.868 17h-2.472l-2.18-3H10v3H8V7zm0 2H10v3h2.5a1.5 1.5 0 0 0 1.493-1.355L14 10.5A1.5 1.5 0 0 0 12.5 9" />
    </Svg>
  )
})
Icon.displayName = 'RegisteredLine'
/**
 * Remix Icon: Registered Line
 * @see {@link https://remixicon.com/icon/registered-line Remix Icon Docs}
 */
export const RegisteredLine = Icon
