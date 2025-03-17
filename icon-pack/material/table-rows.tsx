import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 5V8H5V5H19ZM19 10V14H5V10H19ZM5 19V16H19V19H5Z" />
    </Svg>
  )
}

Icon.displayName = 'TableRows'

/**
 * Material Icon: Table Rows
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:table_rows Material Icon Docs}
 */
export const TableRows = memo(Icon)
