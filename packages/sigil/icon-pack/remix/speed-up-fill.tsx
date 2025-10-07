import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 13c0 2.21-.895 4.21-2.343 5.657l1.414 1.414A9.97 9.97 0 0 0 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.929 7.071l1.414-1.414A8 8 0 1 1 20 13m-4.707-4.707L10.5 12.5l2 2 4.207-4.793z" />
    </Svg>
  )
})
Icon.displayName = 'SpeedUpFill'
/**
 * Remix Icon: Speed Up Fill
 * @see {@link https://remixicon.com/icon/speed-up-fill Remix Icon Docs}
 */
export const SpeedUpFill = Icon
