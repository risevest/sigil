import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.905 1H8.905C7.805 1 6.905 1.9 6.905 3V6H8.905V4H18.905V20H8.905V18H6.905V21C6.905 22.1 7.805 23 8.905 23H18.905C20.005 23 20.905 22.1 20.905 21V3C20.905 1.9 20.005 1 18.905 1ZM6.915 13.47L4.365 10.92L3.095 12.19L6.905 16L14.095 8.81L12.825 7.54L6.915 13.47Z" />
    </Svg>
  )
}

Icon.displayName = 'MobileFriendly'

/**
 * Material Icon: Mobile Friendly
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mobile_friendly Material Icon Docs}
 */
export const MobileFriendly = memo(Icon)
