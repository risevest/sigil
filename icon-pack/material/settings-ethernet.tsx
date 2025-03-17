import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.77007 6.76047L6.23007 5.48047L0.820068 12.0005L6.23007 18.5205L7.77007 17.2405L3.42007 12.0005L7.77007 6.76047ZM7.00007 13.0005H9.00007V11.0005H7.00007V13.0005ZM17.0001 11.0005H15.0001V13.0005H17.0001V11.0005ZM11.0001 13.0005H13.0001V11.0005H11.0001V13.0005ZM17.7701 5.48047L16.2301 6.76047L20.5801 12.0005L16.2301 17.2405L17.7701 18.5205L23.1801 12.0005L17.7701 5.48047Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsEthernet'

/**
 * Material Icon: Settings Ethernet
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_ethernet Material Icon Docs}
 */
export const SettingsEthernet = memo(Icon)
