import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 6.5C15.03 6.5 17.78 7.73 19.76 9.72L17.64 11.84C16.2 10.4 14.2 9.5 12 9.5C9.79999 9.5 7.79999 10.4 6.35999 11.85L4.23999 9.73C6.21999 7.73 8.96999 6.5 12 6.5ZM12 12.5C10.62 12.5 9.36999 13.06 8.46999 13.96L12 17.5L15.53 13.96C14.63 13.06 13.38 12.5 12 12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Wifi2Bar'

/**
 * Material Icon: Wifi 2 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wifi_2_bar Material Icon Docs}
 */
export const Wifi2Bar = memo(Icon)
