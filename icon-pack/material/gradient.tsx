import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 9H13V11H11V9ZM9 11H11V13H9V11ZM13 11H15V13H13V11ZM15 9H17V11H15V9ZM7 9H9V11H7V9ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18ZM19 11H17V13H19V15H17V13H15V15H13V13H11V15H9V13H7V15H5V13H7V11H5V5H19V11Z" />
    </Svg>
  )
}

Icon.displayName = 'Gradient'

/**
 * Material Icon: Gradient
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:gradient Material Icon Docs}
 */
export const Gradient = memo(Icon)
