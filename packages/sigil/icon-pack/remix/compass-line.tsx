import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m3.5-11.5-2 5-5 2 2-5z" />
    </Svg>
  )
})
Icon.displayName = 'CompassLine'
/**
 * Remix Icon: Compass Line
 * @see {@link https://remixicon.com/icon/compass-line Remix Icon Docs}
 */
export const CompassLine = Icon
