import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 8.245V15.5a6.5 6.5 0 1 1-5-6.326v3.163a3.5 3.5 0 1 0 2 3.163V2h3a5 5 0 0 0 5 5v3a7.97 7.97 0 0 1-5-1.755" />
    </Svg>
  )
})
Icon.displayName = 'TiktokFill'
/**
 * Remix Icon: Tiktok Fill
 * @see {@link https://remixicon.com/icon/tiktok-fill Remix Icon Docs}
 */
export const TiktokFill = Icon
