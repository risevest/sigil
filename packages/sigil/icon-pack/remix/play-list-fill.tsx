import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 18h10v2H2zm0-7h14v2H2zm0-7h20v2H2zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83" />
    </Svg>
  )
})
Icon.displayName = 'PlayListFill'
/**
 * Remix Icon: Play List Fill
 * @see {@link https://remixicon.com/icon/play-list-fill Remix Icon Docs}
 */
export const PlayListFill = Icon
