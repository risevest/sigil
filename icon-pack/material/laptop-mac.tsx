import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 18.5C21.1 18.5 21.99 17.6 21.99 16.5L22 5.5C22 4.4 21.1 3.5 20 3.5H4C2.9 3.5 2 4.4 2 5.5V16.5C2 17.6 2.9 18.5 4 18.5H0C0 19.6 0.9 20.5 2 20.5H22C23.1 20.5 24 19.6 24 18.5H20ZM4 5.5H20V16.5H4V5.5ZM12 19.5C11.45 19.5 11 19.05 11 18.5C11 17.95 11.45 17.5 12 17.5C12.55 17.5 13 17.95 13 18.5C13 19.05 12.55 19.5 12 19.5Z" />
    </Svg>
  )
}

Icon.displayName = 'LaptopMac'

/**
 * Material Icon: Laptop Mac
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:laptop_mac Material Icon Docs}
 */
export const LaptopMac = memo(Icon)
