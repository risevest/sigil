import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.998 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-10v14h10zm-2 6v2h-2v-2z" />
    </Svg>
  )
})
Icon.displayName = 'DoorLine'
/**
 * Remix Icon: Door Line
 * @see {@link https://remixicon.com/icon/door-line Remix Icon Docs}
 */
export const DoorLine = Icon
