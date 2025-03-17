import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.5 7.5V16.5L16.5 12L9.5 7.5Z" />
      <Path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18.01H4V5.99H20V18.01Z" />
    </Svg>
  )
}

Icon.displayName = 'SmartDisplay'

/**
 * Material Icon: Smart Display
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:smart_display Material Icon Docs}
 */
export const SmartDisplay = memo(Icon)
