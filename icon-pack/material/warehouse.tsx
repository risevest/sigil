import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 8.35V19H18V11H6V19H4V8.35L12 5.15L20 8.35ZM22 21V7L12 3L2 7V21H8V13H16V21H22ZM11 19H9V21H11V19ZM13 16H11V18H13V16ZM15 19H13V21H15V19Z" />
    </Svg>
  )
}

Icon.displayName = 'Warehouse'

/**
 * Material Icon: Warehouse
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:warehouse Material Icon Docs}
 */
export const Warehouse = memo(Icon)
