import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 5H5C2.79 5 1 6.79 1 9V14C1 16.21 2.79 18 5 18H7V19H17V18H19C21.21 18 23 16.21 23 14V9C23 6.79 21.21 5 19 5ZM21 14C21 15.1 20.1 16 19 16H5C3.9 16 3 15.1 3 14V9C3 7.9 3.9 7 5 7H19C20.1 7 21 7.9 21 9V14Z" />
    </Svg>
  )
}

Icon.displayName = 'HomeMax'

/**
 * Material Icon: Home Max
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:home_max Material Icon Docs}
 */
export const HomeMax = memo(Icon)
