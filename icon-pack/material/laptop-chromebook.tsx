import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 18.5V3.5H2V18.5H0V20.5H24V18.5H22ZM14 18.5H10V17.5H14V18.5ZM20 15.5H4V5.5H20V15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'LaptopChromebook'

/**
 * Material Icon: Laptop Chromebook
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:laptop_chromebook Material Icon Docs}
 */
export const LaptopChromebook = memo(Icon)
