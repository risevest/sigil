import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 8V16H15V8H19ZM19 5H15C13.34 5 12 6.34 12 8V16C12 17.66 13.34 19 15 19H19C20.66 19 22 17.66 22 16V8C22 6.34 20.66 5 19 5ZM10 8V5H5C3.34 5 2 6.34 2 8V16C2 17.66 3.34 19 5 19H8C9.66 19 11 17.66 11 16V13C11 11.34 9.66 10 8 10H5V8H10ZM8 13V16H5V13H8Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi60fps'

/**
 * Material Icon: 6 0fps
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:6_0fps Material Icon Docs}
 */
export const Mi60fps = memo(Icon)
