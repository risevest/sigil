import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10.83 13h2.34A3 3 0 1 1 16 15H8a3 3 0 1 1 2.83-2M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
Icon.displayName = 'TapeLine'
/**
 * Remix Icon: Tape Line
 * @see {@link https://remixicon.com/icon/tape-line Remix Icon Docs}
 */
export const TapeLine = Icon
