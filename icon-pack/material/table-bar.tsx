import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 7.5C22 5.57 17.52 4 12 4C6.48 4 2 5.57 2 7.5C2 9.31 5.95 10.81 11 10.98V15H9.35C8.53 15 7.8 15.5 7.49 16.26L6 20H8L9.2 17H14.8L16 20H18L16.5 16.26C16.2 15.5 15.46 15 14.65 15H13V10.98C18.05 10.81 22 9.31 22 7.5ZM12 6C16.05 6 18.74 6.86 19.72 7.5C18.74 8.14 16.05 9 12 9C7.95 9 5.26 8.14 4.28 7.5C5.26 6.86 7.95 6 12 6Z" />
    </Svg>
  )
}

Icon.displayName = 'TableBar'

/**
 * Material Icon: Table Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:table_bar Material Icon Docs}
 */
export const TableBar = memo(Icon)
