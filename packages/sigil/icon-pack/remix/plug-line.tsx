import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h3V2h2v4h4V2h2v4h3a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4zm-5-2h8a2 2 0 0 0 2-2v-3H6v3a2 2 0 0 0 2 2m10-8H6v1h12zm-6 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
    </Svg>
  )
})
Icon.displayName = 'PlugLine'
/**
 * Remix Icon: Plug Line
 * @see {@link https://remixicon.com/icon/plug-line Remix Icon Docs}
 */
export const PlugLine = Icon
