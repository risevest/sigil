import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 6.83L18.09 8.42L19.5 7L15.5 3L11.5 7L12.91 8.41L14.5 6.83V13H6.5C5.4 13 4.5 13.9 4.5 15V21H6.5V15H14.5C15.6 15 16.5 14.1 16.5 13V6.83Z" />
    </Svg>
  )
}

Icon.displayName = 'TurnSharpRight'

/**
 * Material Icon: Turn Sharp Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:turn_sharp_right Material Icon Docs}
 */
export const TurnSharpRight = memo(Icon)
