import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 8H12V3H8C5.79 3 4 4.79 4 7V13C4 14.1 4.9 15 6 15H8V17.93C7.39 17.58 6.84 17.15 6.35 16.66L4.93 18.08C6.74 19.88 9.24 21 12 21C14.76 21 17.26 19.88 19.07 18.07L17.65 16.65C17.16 17.14 16.6 17.57 16 17.92V15H18C19.1 15 20 14.1 20 13V10C20 8.9 19.1 8 18 8ZM14 18.75C13.36 18.91 12.69 19 12 19C11.31 19 10.64 18.91 10 18.75V15H14V18.75ZM18 13H6V7C6 5.9 6.9 5 8 5H10V10H18V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Crib'

/**
 * Material Icon: Crib
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:crib Material Icon Docs}
 */
export const Crib = memo(Icon)
