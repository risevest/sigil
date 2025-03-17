import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 10V18L16 14L9 10ZM21 6H13.42L16.71 2.71L16 2L12 6H11.97L7.97 2L7.28 2.71L10.56 6H3C1.9 6 1 6.9 1 8V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V8C23 6.9 22.1 6 21 6ZM21 20H3V8H21V20Z" />
    </Svg>
  )
}

Icon.displayName = 'LiveTv'

/**
 * Material Icon: Live Tv
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:live_tv Material Icon Docs}
 */
export const LiveTv = memo(Icon)
