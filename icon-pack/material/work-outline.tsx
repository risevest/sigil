import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 6.5V4.5H10V6.5H14ZM4 8.5V19.5H20V8.5H4ZM20 6.5C21.11 6.5 22 7.39 22 8.5V19.5C22 20.61 21.11 21.5 20 21.5H4C2.89 21.5 2 20.61 2 19.5L2.01 8.5C2.01 7.39 2.89 6.5 4 6.5H8V4.5C8 3.39 8.89 2.5 10 2.5H14C15.11 2.5 16 3.39 16 4.5V6.5H20Z" />
    </Svg>
  )
}

Icon.displayName = 'WorkOutline'

/**
 * Material Icon: Work Outline
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:work_outline Material Icon Docs}
 */
export const WorkOutline = memo(Icon)
