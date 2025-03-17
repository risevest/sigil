import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.5 9V11H21.5V9H2.5ZM2.5 15H7.5V13H2.5V15ZM9.5 15H14.5V13H9.5V15ZM16.5 15H21.5V13H16.5V15Z" />
    </Svg>
  )
}

Icon.displayName = 'PowerInput'

/**
 * Material Icon: Power Input
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:power_input Material Icon Docs}
 */
export const PowerInput = memo(Icon)
