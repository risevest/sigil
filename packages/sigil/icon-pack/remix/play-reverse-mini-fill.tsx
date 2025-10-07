import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.248 5.439 5.74 11.569a.5.5 0 0 0 0 .863l10.508 6.13A.5.5 0 0 0 17 18.13V5.87a.5.5 0 0 0-.752-.431" />
    </Svg>
  )
})
Icon.displayName = 'PlayReverseMiniFill'
/**
 * Remix Icon: Play Reverse Mini Fill
 * @see {@link https://remixicon.com/icon/play-reverse-mini-fill Remix Icon Docs}
 */
export const PlayReverseMiniFill = Icon
