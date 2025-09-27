import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.343 1.408 22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5l-7.778-7.778A8 8 0 0 1 4.17 1.587zm.241 3.07-.051.11a6 6 0 0 0 1.048 6.535l.176.185 6.364 6.364 2.828-2.829z" />
    </Svg>
  )
})
Icon.displayName = 'KnifeLine'
/**
 * Remix Icon: Knife Line
 * @see {@link https://remixicon.com/icon/knife-line Remix Icon Docs}
 */
export const KnifeLine = Icon
