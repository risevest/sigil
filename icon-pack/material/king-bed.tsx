import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 12C22 10.9 21.1 10 20 10V7C20 5.9 19.1 5 18 5H6C4.9 5 4 5.9 4 7V10C2.9 10 2 10.9 2 12V17H3.33L4 19H5L5.67 17H18.34L19 19H20L20.67 17H22V12ZM18 10H13V7H18V10ZM6 7H11V10H6V7ZM4 12H20V15H4V12Z" />
    </Svg>
  )
}

Icon.displayName = 'KingBed'

/**
 * Material Icon: King Bed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:king_bed Material Icon Docs}
 */
export const KingBed = memo(Icon)
