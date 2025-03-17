import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 18.5V17.5C21.1 17.5 21.99 16.6 21.99 15.5L22 5.5C22 4.4 21.1 3.5 20 3.5H4C2.9 3.5 2 4.4 2 5.5V15.5C2 16.6 2.9 17.5 4 17.5V18.5H0V20.5H24V18.5H20ZM4 5.5H20V15.5H4V5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'LaptopWindows'

/**
 * Material Icon: Laptop Windows
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:laptop_windows Material Icon Docs}
 */
export const LaptopWindows = memo(Icon)
