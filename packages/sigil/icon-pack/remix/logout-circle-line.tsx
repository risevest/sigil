import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 11h8v2H5v3l-5-4 5-4zm-1 7h2.708a8 8 0 1 0 0-12H4A9.99 9.99 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-4" />
    </Svg>
  )
})
Icon.displayName = 'LogoutCircleLine'
/**
 * Remix Icon: Logout Circle Line
 * @see {@link https://remixicon.com/icon/logout-circle-line Remix Icon Docs}
 */
export const LogoutCircleLine = Icon
