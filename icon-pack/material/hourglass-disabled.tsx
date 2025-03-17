import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.70502 3.33984H16.705V6.83984L13.865 9.67984L15.115 10.9298L18.705 7.34984L18.695 7.33984H18.705V1.33984H6.70502V2.50984L8.70502 4.50984V3.33984Z" />
      <Path d="M2.80502 1.43984L1.39502 2.84984L10.295 11.7498L6.70502 15.3398L6.71502 15.3498H6.70502V21.3398H18.705V20.1698L21.195 22.6598L22.605 21.2498L2.80502 1.43984ZM16.705 19.3398H8.70502V15.8398L11.545 12.9998L16.705 18.1698V19.3398Z" />
    </Svg>
  )
}

Icon.displayName = 'HourglassDisabled'

/**
 * Material Icon: Hourglass Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hourglass_disabled Material Icon Docs}
 */
export const HourglassDisabled = memo(Icon)
