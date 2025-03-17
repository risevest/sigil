import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.58 1.41L15.16 0L11.99 3.17L8.82003 0L7.41003 1.41L11.99 6L16.58 1.41Z" />
      <Path d="M16.58 6.41L15.16 5L11.99 8.17L8.82003 5L7.41003 6.41L11.99 11L16.58 6.41Z" />
      <Path d="M7.42003 17.59L8.84003 19L12.01 15.83L15.18 19L16.59 17.59L12.01 13L7.42003 17.59Z" />
      <Path d="M7.42003 22.59L8.84003 24L12.01 20.83L15.18 24L16.59 22.59L12.01 18L7.42003 22.59Z" />
    </Svg>
  )
}

Icon.displayName = 'UnfoldLessDouble'

/**
 * Material Icon: Unfold Less Double
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:unfold_less_double Material Icon Docs}
 */
export const UnfoldLessDouble = memo(Icon)
