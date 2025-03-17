import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 20H4V22H20V20Z" />
      <Path d="M20 2H4V4H20V2Z" />
      <Path d="M9.41 13.59L8 15L12 19L16 15L14.59 13.59L13 15.17V8.83L14.59 10.41L16 9L12 5L8 9L9.41 10.41L11 8.83V15.17L9.41 13.59Z" />
    </Svg>
  )
}

Icon.displayName = 'Expand'

/**
 * Material Icon: Expand
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:expand Material Icon Docs}
 */
export const Expand = memo(Icon)
