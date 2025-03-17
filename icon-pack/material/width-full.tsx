import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM4 18V6H5V18H4ZM7 18V6H17V18H7ZM20 18H19V6H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'WidthFull'

/**
 * Material Icon: Width Full
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:width_full Material Icon Docs}
 */
export const WidthFull = memo(Icon)
