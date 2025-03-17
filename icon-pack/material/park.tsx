import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.95 12H18.95L11.95 2L5.00005 12H6.95005L3.05005 18H9.97005V22H13.92V18H20.95L16.95 12ZM6.74005 16L10.64 10H8.83005L11.96 5.5L15.11 10H13.21L17.21 16H6.74005Z" />
    </Svg>
  )
}

Icon.displayName = 'Park'

/**
 * Material Icon: Park
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:park Material Icon Docs}
 */
export const Park = memo(Icon)
