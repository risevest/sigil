import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.803 4A6 6 0 0 0 23 12.197V19c0 .553-.44 1.001-1.003 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1zM20 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-1 6v3h2v-3z" />
    </Svg>
  )
})
Icon.displayName = 'PhoneCameraFill'
/**
 * Remix Icon: Phone Camera Fill
 * @see {@link https://remixicon.com/icon/phone-camera-fill Remix Icon Docs}
 */
export const PhoneCameraFill = Icon
