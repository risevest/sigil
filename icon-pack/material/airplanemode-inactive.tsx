import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.805 7.36531V3.19531C10.805 2.36531 11.475 1.69531 12.305 1.69531C13.135 1.69531 13.805 2.36531 13.805 3.19531V8.69531L22.305 13.6953V15.6953L17.815 14.3753L10.805 7.36531ZM20.085 22.3053L21.495 20.8953L3.11501 2.50531L1.69501 3.91531L8.07501 10.2953L2.30501 13.6953V15.6953L10.805 13.1953V18.6953L8.30501 20.1953V21.6953L12.305 20.6953L16.305 21.6953V20.1953L13.805 18.6953V16.0253L20.085 22.3053Z" />
    </Svg>
  )
}

Icon.displayName = 'AirplanemodeInactive'

/**
 * Material Icon: Airplanemode Inactive
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airplanemode_inactive Material Icon Docs}
 */
export const AirplanemodeInactive = memo(Icon)
