import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 6H7C3.69 6 1 8.69 1 12C1 15.31 3.69 18 7 18H17C20.31 18 23 15.31 23 12C23 8.69 20.31 6 17 6ZM17 16H7C4.79 16 3 14.21 3 12C3 9.79 4.79 8 7 8H17C19.21 8 21 9.79 21 12C21 14.21 19.21 16 17 16ZM17 9C15.34 9 14 10.34 14 12C14 13.66 15.34 15 17 15C18.66 15 20 13.66 20 12C20 10.34 18.66 9 17 9Z" />
    </Svg>
  )
}

Icon.displayName = 'ToggleOn'

/**
 * Material Icon: Toggle On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:toggle_on Material Icon Docs}
 */
export const ToggleOn = memo(Icon)
