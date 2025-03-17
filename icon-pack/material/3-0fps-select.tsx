import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3V5H9V7H5V9H9V11H4V13H9C10.1 13 11 12.1 11 11V9.5C11 8.67 10.83 8 10 8C10.83 8 11 7.33 11 6.5V5C11 3.9 10.1 3 9 3H4ZM18 3C19.1 3 20 3.9 20 5V11C20 12.1 19.1 13 18 13H15C13.9 13 13 12.1 13 11V5C13 3.9 13.9 3 15 3H18ZM18 5H15V11H18V5ZM5 21H3V16H5V21ZM9 21H7V16H9V21ZM13 21H11V16H13V21ZM21 21H15V16H21V21Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi30fpsSelect'

/**
 * Material Icon: 3 0fps Select
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:3_0fps_select Material Icon Docs}
 */
export const Mi30fpsSelect = memo(Icon)
