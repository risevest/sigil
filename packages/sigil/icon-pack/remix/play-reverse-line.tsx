import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.606 12 14 7.737v8.526zm-2.982.416 10.599 7.066a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L4.624 11.584a.5.5 0 0 0 0 .832" />
    </Svg>
  )
})
Icon.displayName = 'PlayReverseLine'
/**
 * Remix Icon: Play Reverse Line
 * @see {@link https://remixicon.com/icon/play-reverse-line Remix Icon Docs}
 */
export const PlayReverseLine = Icon
