import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15C21 13.9 20.1 13 19 13ZM19 19H5V15H19V19Z" />
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V9C3 10.1 3.9 11 5 11H19C20.1 11 21 10.1 21 9V5C21 3.9 20.1 3 19 3ZM19 9H5V5H19V9Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewAgenda'

/**
 * Material Icon: View Agenda
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_agenda Material Icon Docs}
 */
export const ViewAgenda = memo(Icon)
