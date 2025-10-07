import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10.005 20h-4v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7V1.59a.5.5 0 0 1 .582-.493L21.17 2.86a1 1 0 0 1 .836.986V6h1v2h-1v7h1v2h-1v2.153a1 1 0 0 1-.836.986l-1.164.194V22h-2v-1.334l-7.418 1.237a.5.5 0 0 1-.582-.493zm2-.361 8-1.334V4.694l-8-1.333zm4.5-5.64c-.828 0-1.5-1.119-1.5-2.5 0-1.38.672-2.5 1.5-2.5s1.5 1.12 1.5 2.5c0 1.381-.672 2.5-1.5 2.5" />
    </Svg>
  )
})
Icon.displayName = 'Safe2Fill'
/**
 * Remix Icon: Safe 2 Fill
 * @see {@link https://remixicon.com/icon/safe-2-fill Remix Icon Docs}
 */
export const Safe2Fill = Icon
