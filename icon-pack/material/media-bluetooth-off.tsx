import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.305 5.46547V2.29547H15.305V6.29547H11.305V7.46547L9.305 5.46547ZM19.725 14.2955L22.305 16.8655L21.505 17.6655L14.725 10.8855L15.525 10.0855L18.275 12.8355V8.29547H18.875L22.305 11.7255L19.725 14.2955ZM19.475 12.8455L20.605 11.7155L19.475 10.5855V12.8455ZM21.495 20.4855L20.085 21.8955L16.105 17.9155L15.525 18.4955L14.675 17.6455L15.255 17.0655L11.305 13.1255V16.2955C11.305 18.5055 9.525 20.2955 7.315 20.2955C5.105 20.2955 3.305 18.5055 3.305 16.2955C3.305 14.0855 5.095 12.2955 7.315 12.2955C8.045 12.2955 8.725 12.5055 9.315 12.8455V11.1255L1.695 3.51547L3.105 2.10547L21.495 20.4855Z" />
    </Svg>
  )
}

Icon.displayName = 'MediaBluetoothOff'

/**
 * Material Icon: Media Bluetooth Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:media_bluetooth_off Material Icon Docs}
 */
export const MediaBluetoothOff = memo(Icon)
