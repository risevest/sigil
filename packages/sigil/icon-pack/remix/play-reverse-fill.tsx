import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.624 12.416 10.599 7.066a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L4.624 11.584a.5.5 0 0 0 0 .832" />
    </Svg>
  )
})
Icon.displayName = 'PlayReverseFill'
/**
 * Remix Icon: Play Reverse Fill
 * @see {@link https://remixicon.com/icon/play-reverse-fill Remix Icon Docs}
 */
export const PlayReverseFill = Icon
