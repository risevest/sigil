import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M13 8.2L12 7.2L8 11.2L4 7.2L3 8.2L7 12.2L3 16.2L4 17.2L8 13.2L12 17.2L13 16.2L9 12.2L13 8.2ZM19 1H9C7.9 1 7 1.9 7 3V6H9V4H19V20H9V18H7V21C7 22.1 7.9 23 9 23H19C20.1 23 21 22.1 21 21V3C21 1.9 20.1 1 19 1Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'PhonelinkErase'

/**
 * Material Icon: Phonelink Erase
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phonelink_erase Material Icon Docs}
 */
export const PhonelinkErase = memo(Icon)
