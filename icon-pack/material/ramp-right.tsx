import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5 21H14.5V6.83L16.09 8.42L17.5 7L13.5 3L9.5 7L10.91 8.41L12.5 6.83V9C12.5 13.27 8.47 16.13 6.5 17.27L7.96 18.73C9.87 17.56 11.4 16.19 12.5 14.7V21Z" />
    </Svg>
  )
}

Icon.displayName = 'RampRight'

/**
 * Material Icon: Ramp Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:ramp_right Material Icon Docs}
 */
export const RampRight = memo(Icon)
