import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.5 18H2.5V20H21.5V18ZM19.5 10V14H4.5V10H19.5ZM20.5 8H3.5C2.95 8 2.5 8.45 2.5 9V15C2.5 15.55 2.95 16 3.5 16H20.5C21.05 16 21.5 15.55 21.5 15V9C21.5 8.45 21.05 8 20.5 8ZM21.5 4H2.5V6H21.5V4Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewDay'

/**
 * Material Icon: View Day
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_day Material Icon Docs}
 */
export const ViewDay = memo(Icon)
