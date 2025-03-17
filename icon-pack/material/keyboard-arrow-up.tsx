import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.41 15.7049L12 11.1249L16.59 15.7049L18 14.2949L12 8.29492L6 14.2949L7.41 15.7049Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardArrowUp'

/**
 * Material Icon: Keyboard Arrow Up
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_arrow_up Material Icon Docs}
 */
export const KeyboardArrowUp = memo(Icon)
