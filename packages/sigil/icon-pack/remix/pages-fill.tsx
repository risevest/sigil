import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H4a1 1 0 0 1-1-1V8h18v13a1 1 0 0 1-1 1m1-16H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM7 11v4h4v-4zm0 6v2h10v-2zm6-5v2h4v-2z" />
    </Svg>
  )
})
Icon.displayName = 'PagesFill'
/**
 * Remix Icon: Pages Fill
 * @see {@link https://remixicon.com/icon/pages-fill Remix Icon Docs}
 */
export const PagesFill = Icon
