import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.41003 18.59L8.83003 20L12 16.83L15.17 20L16.58 18.59L12 14L7.41003 18.59ZM16.59 5.41L15.17 4L12 7.17L8.83003 4L7.41003 5.41L12 10L16.59 5.41Z" />
    </Svg>
  )
}

Icon.displayName = 'UnfoldLess'

/**
 * Material Icon: Unfold Less
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:unfold_less Material Icon Docs}
 */
export const UnfoldLess = memo(Icon)
