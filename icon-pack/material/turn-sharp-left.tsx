import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.5 6.83L5.91 8.41L4.5 7L8.5 3L12.5 7L11.09 8.41L9.5 6.83V13H17.5C18.6 13 19.5 13.9 19.5 15V21H17.5V15H9.5C8.4 15 7.5 14.1 7.5 13V6.83Z" />
    </Svg>
  )
}

Icon.displayName = 'TurnSharpLeft'

/**
 * Material Icon: Turn Sharp Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:turn_sharp_left Material Icon Docs}
 */
export const TurnSharpLeft = memo(Icon)
