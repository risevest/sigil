import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 5V11H15V5H18ZM18 3H15C13.9 3 13 3.9 13 5V11C13 12.1 13.9 13 15 13H18C19.1 13 20 12.1 20 11V5C20 3.9 19.1 3 18 3ZM11 5V3H6C4.9 3 4 3.9 4 5V11C4 12.1 4.9 13 6 13H9C10.1 13 11 12.1 11 11V9C11 7.9 10.1 7 9 7H6V5H11ZM9 9V11H6V9H9ZM5 21H3V16H5V21ZM9 21H7V16H9V21ZM13 21H11V16H13V21ZM21 21H15V16H21V21Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi60fpsSelect'

/**
 * Material Icon: 6 0fps Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:6_0fps_select Material Icon Docs}
 */
export const Mi60fpsSelect = memo(Icon)
