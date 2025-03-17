import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.5 21H9.5V6.83L7.91 8.41L6.5 7L10.5 3L14.5 7L13.09 8.41L11.5 6.83V9C11.5 13.27 15.53 16.13 17.5 17.27L16.04 18.73C14.13 17.57 12.6 16.2 11.5 14.71V21Z" />
    </Svg>
  )
}

Icon.displayName = 'RampLeft'

/**
 * Material Icon: Ramp Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:ramp_left Material Icon Docs}
 */
export const RampLeft = memo(Icon)
