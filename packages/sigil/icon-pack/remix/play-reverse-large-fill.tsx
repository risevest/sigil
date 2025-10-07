import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 20.196V3.804a1 1 0 0 0-1.53-.848L3.357 11.152a1 1 0 0 0 0 1.696l13.113 8.196a1 1 0 0 0 1.53-.848" />
    </Svg>
  )
})
Icon.displayName = 'PlayReverseLargeFill'
/**
 * Remix Icon: Play Reverse Large Fill
 * @see {@link https://remixicon.com/icon/play-reverse-large-fill Remix Icon Docs}
 */
export const PlayReverseLargeFill = Icon
