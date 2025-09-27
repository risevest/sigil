import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1m3 7v2h8V9z" />
    </Svg>
  )
})
Icon.displayName = 'Bookmark2Fill'
/**
 * Remix Icon: Bookmark 2 Fill
 * @see {@link https://remixicon.com/icon/bookmark-2-fill Remix Icon Docs}
 */
export const Bookmark2Fill = Icon
