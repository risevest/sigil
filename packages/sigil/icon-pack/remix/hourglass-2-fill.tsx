import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 2h16v4.46L13.537 12 20 17.54V22H4v-4.46L10.463 12 4 6.46zm12.297 5L18 5.54V4H6v1.54L7.703 7zM12 13.317 6 18.46V20h1l5-3 5 3h1v-1.54z" />
    </Svg>
  )
})
Icon.displayName = 'Hourglass2Fill'
/**
 * Remix Icon: Hourglass 2 Fill
 * @see {@link https://remixicon.com/icon/hourglass-2-fill Remix Icon Docs}
 */
export const Hourglass2Fill = Icon
