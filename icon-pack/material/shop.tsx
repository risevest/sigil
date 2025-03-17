import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 6.5V4.5C16 3.39 15.11 2.5 14 2.5H10C8.89 2.5 8 3.39 8 4.5V6.5H2V19.5C2 20.61 2.89 21.5 4 21.5H20C21.11 21.5 22 20.61 22 19.5V6.5H16ZM10 4.5H14V6.5H10V4.5ZM20 19.5H4V8.5H20V19.5ZM9 18.5L16.5 13.5L9 9.5V18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Shop'

/**
 * Material Icon: Shop
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:shop Material Icon Docs}
 */
export const Shop = memo(Icon)
