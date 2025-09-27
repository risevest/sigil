import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 18v2H3v-2zM17.404 3.903 22 8.5l-4.596 4.596-1.414-1.415L19.172 8.5 15.99 5.318zM12 11v2H3v-2zm0-7v2H3V4z" />
    </Svg>
  )
})
Icon.displayName = 'MenuUnfoldLine'
/**
 * Remix Icon: Menu Unfold Line
 * @see {@link https://remixicon.com/icon/menu-unfold-line Remix Icon Docs}
 */
export const MenuUnfoldLine = Icon
