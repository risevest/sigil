import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 18h10v2H2zm0-7h20v2H2zm0-7h20v2H2zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2z" />
    </Svg>
  )
})
Icon.displayName = 'PlayListAddFill'
/**
 * Remix Icon: Play List Add Fill
 * @see {@link https://remixicon.com/icon/play-list-add-fill Remix Icon Docs}
 */
export const PlayListAddFill = Icon
