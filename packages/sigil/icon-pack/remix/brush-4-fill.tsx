import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 15.997H4v2h16zm-17-2v-10a1 1 0 0 1 1-1h3v8.272h2V2.997h11a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5z" />
    </Svg>
  )
})
Icon.displayName = 'Brush4Fill'
/**
 * Remix Icon: Brush 4 Fill
 * @see {@link https://remixicon.com/icon/brush-4-fill Remix Icon Docs}
 */
export const Brush4Fill = Icon
