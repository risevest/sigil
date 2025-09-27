import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m7.752 5.439 10.508 6.13a.5.5 0 0 1 0 .863l-10.508 6.13A.5.5 0 0 1 7 18.13V5.87a.5.5 0 0 1 .752-.431" />
    </Svg>
  )
})
Icon.displayName = 'PlayMiniFill'
/**
 * Remix Icon: Play Mini Fill
 * @see {@link https://remixicon.com/icon/play-mini-fill Remix Icon Docs}
 */
export const PlayMiniFill = Icon
