import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 10H18L21 7L18 4H13V2H11V4H4V10H11V12H6L3 15L6 18H11V22H13V18H20V12H13V10ZM6 6H17.17L18.17 7L17.17 8H6V6ZM18 16H6.83L5.83 15L6.83 14H18V16Z" />
    </Svg>
  )
}

Icon.displayName = 'Signpost'

/**
 * Material Icon: Signpost
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signpost Material Icon Docs}
 */
export const Signpost = memo(Icon)
