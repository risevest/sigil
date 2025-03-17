import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 7H9C7.9 7 7 7.9 7 9V19C7 20.1 7.9 21 9 21H19C20.1 21 21 20.1 21 19V9C21 7.9 20.1 7 19 7ZM19 9V11H9V9H19ZM13 15V13H15V15H13ZM15 17V19H13V17H15ZM11 15H9V13H11V15ZM17 13H19V15H17V13ZM9 17H11V19H9V17ZM17 19V17H19V19H17ZM6 17H5C3.9 17 3 16.1 3 15V5C3 3.9 3.9 3 5 3H15C16.1 3 17 3.9 17 5V6H15V5H5V15H6V17Z" />
    </Svg>
  )
}

Icon.displayName = 'TableView'

/**
 * Material Icon: Table View
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:table_view Material Icon Docs}
 */
export const TableView = memo(Icon)
