import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 5V19H3V5H21ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM12 8C15.25 8 18 9.83 18 12C18 14.17 15.25 16 12 16C8.75 16 6 14.17 6 12C6 9.83 8.75 8 12 8ZM12 6C7.58 6 4 8.69 4 12C4 15.31 7.58 18 12 18C16.42 18 20 15.31 20 12C20 8.69 16.42 6 12 6Z" />
    </Svg>
  )
}

Icon.displayName = 'Vignette'

/**
 * Material Icon: Vignette
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vignette Material Icon Docs}
 */
export const Vignette = memo(Icon)
