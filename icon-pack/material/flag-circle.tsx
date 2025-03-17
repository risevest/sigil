import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
      <Path d="M15 9L14 7H8V18H9.5V13H12L13 15H18V9H15ZM16.5 13.5H13.93L12.93 11.5H9.5V8.5H13.07L14.07 10.5H16.5V13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FlagCircle'

/**
 * Material Icon: Flag Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flag_circle Material Icon Docs}
 */
export const FlagCircle = memo(Icon)
