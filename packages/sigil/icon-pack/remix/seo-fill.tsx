import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 3a7 7 0 0 0 0 14h1.07a7 7 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6 7 7 0 0 1 1.426 2A7 7 0 0 0 16 3zm3 13a5 5 0 1 1 9.172 2.757l2.535 2.536-1.414 1.414-2.536-2.535A5 5 0 0 1 11 16" />
    </Svg>
  )
})
Icon.displayName = 'SeoFill'
/**
 * Remix Icon: Seo Fill
 * @see {@link https://remixicon.com/icon/seo-fill Remix Icon Docs}
 */
export const SeoFill = Icon
