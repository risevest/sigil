import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 2C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C12.33 17 12.65 16.97 12.9552 16.9089L12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.5977 9 15 10.3393 15 12H12.5L14.6282 16.2544C16.0517 15.3731 17 13.7973 17 12C17 9.23858 14.7614 7 12 7Z" />
    </Svg>
  )
}

Icon.displayName = 'DeviceRecoverFill'

/**
 * Remix Icon: Device Recover Fill
 * @see {@link https://remixicon.com/icon/device-recover-fill Remix Icon Docs}
 */
export const DeviceRecoverFill = memo(Icon)