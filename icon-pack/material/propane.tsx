import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 6H16V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V6H7C3.69 6 1 8.69 1 12C1 15.31 3.69 18 7 18V21H9V18H15V21H17V18C20.31 18 23 15.31 23 12C23 8.69 20.31 6 17 6ZM10 5H14V6H10V5ZM17 16H7C4.79 16 3 14.21 3 12C3 9.79 4.79 8 7 8H17C19.21 8 21 9.79 21 12C21 14.21 19.21 16 17 16Z" />
    </Svg>
  )
}

Icon.displayName = 'Propane'

/**
 * Material Icon: Propane
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:propane Material Icon Docs}
 */
export const Propane = memo(Icon)
