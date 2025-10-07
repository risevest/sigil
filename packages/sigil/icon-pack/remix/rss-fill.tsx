import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 0 0-8-8zm0 7a4 4 0 0 1 4 4H3z" />
    </Svg>
  )
})
Icon.displayName = 'RssFill'
/**
 * Remix Icon: Rss Fill
 * @see {@link https://remixicon.com/icon/rss-fill Remix Icon Docs}
 */
export const RssFill = Icon
