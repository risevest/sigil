import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z" />
    </Svg>
  )
}

Icon.displayName = 'TrendingDown'

/**
 * Material Icon: Trending Down
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:trending_down Material Icon Docs}
 */
export const TrendingDown = memo(Icon)
