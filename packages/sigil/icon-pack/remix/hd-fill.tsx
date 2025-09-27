import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.5 8.25V9H6v6h1.5v-2.25h2V15H11V9H9.5v2.25zm7-.75H16a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1.5zM13 9v6h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
    </Svg>
  )
})
Icon.displayName = 'HdFill'
/**
 * Remix Icon: Hd Fill
 * @see {@link https://remixicon.com/icon/hd-fill Remix Icon Docs}
 */
export const HdFill = Icon
