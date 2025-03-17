import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.5 12L17.5 8V11H2.5V13H17.5V16L21.5 12Z" />
    </Svg>
  )
}

Icon.displayName = 'TrendingFlat'

/**
 * Material Icon: Trending Flat
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:trending_flat Material Icon Docs}
 */
export const TrendingFlat = memo(Icon)
