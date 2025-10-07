import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.27 7.63A5.76 5.76 0 0 0 10.817 2h3.03v5.152h3.637v3.636h-3.637v5.454c0 .515.198 1.207.91 1.667q.711.46 3.03.455V22h-4.243a4.546 4.546 0 0 1-4.545-4.546v-6.666H6.27z" />
    </Svg>
  )
})
Icon.displayName = 'TumblrFill'
/**
 * Remix Icon: Tumblr Fill
 * @see {@link https://remixicon.com/icon/tumblr-fill Remix Icon Docs}
 */
export const TumblrFill = Icon
