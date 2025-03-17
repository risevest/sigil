import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M24 18L20.14 12H22L15 2L12 6.29L9 2L2 12H3.86L0 18H7V22H11V18H13V22H17V18H24ZM15 5.49L18.16 10H16.48L20.34 16H16.72L14.15 12H16L13.22 8.03L15 5.49ZM3.66 16L7.52 10H5.84L9 5.49L12.16 10H10.48L14.34 16H3.66Z" />
    </Svg>
  )
}

Icon.displayName = 'Forest'

/**
 * Material Icon: Forest
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:forest Material Icon Docs}
 */
export const Forest = memo(Icon)
