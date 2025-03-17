import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5 10.41L16.5 6.41L15.09 5L12.5 7.59V4H10.5V7.59L7.91 5L6.5 6.41L10.5 10.41V12H8.91L4.91 8L3.5 9.41L6.09 12H2.5V14H6.09L3.5 16.59L4.91 18L8.91 14H10.5V15.59L6.5 19.59L7.91 21L10.5 18.41V22H12.5V18.41L15.09 21L16.5 19.59L12.5 15.59V14H14.09L18.09 18L19.5 16.59L16.91 14H20.5V12H12.5V10.41Z" />
      <Path d="M21.5 2H19.5V7H21.5V2Z" />
      <Path d="M21.5 8H19.5V10H21.5V8Z" />
    </Svg>
  )
}

Icon.displayName = 'SevereCold'

/**
 * Material Icon: Severe Cold
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:severe_cold Material Icon Docs}
 */
export const SevereCold = memo(Icon)
