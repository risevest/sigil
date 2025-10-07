import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A4 4 0 0 1 17 13M7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4m10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2" />
    </Svg>
  )
})
Icon.displayName = 'SpyLine'
/**
 * Remix Icon: Spy Line
 * @see {@link https://remixicon.com/icon/spy-line Remix Icon Docs}
 */
export const SpyLine = Icon
