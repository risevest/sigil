import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1m13 2H6v15.432l6-3.761 6 3.761zM8 9h8v2H8z" />
    </Svg>
  )
})
Icon.displayName = 'Bookmark2Line'
/**
 * Remix Icon: Bookmark 2 Line
 * @see {@link https://remixicon.com/icon/bookmark-2-line Remix Icon Docs}
 */
export const Bookmark2Line = Icon
