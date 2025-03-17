import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 7H7V17H9V7Z" />
      <Path d="M13 7H11V12H13V7Z" />
      <Path d="M17 7H15V15H17V7Z" />
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewKanban'

/**
 * Material Icon: View Kanban
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_kanban Material Icon Docs}
 */
export const ViewKanban = memo(Icon)
