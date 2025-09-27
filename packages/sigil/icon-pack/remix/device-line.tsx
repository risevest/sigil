import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2 0V4H5v14h7V9a1 1 0 0 1 1-1zm-3 2v10h6V10z" />
    </Svg>
  )
})
Icon.displayName = 'DeviceLine'
/**
 * Remix Icon: Device Line
 * @see {@link https://remixicon.com/icon/device-line Remix Icon Docs}
 */
export const DeviceLine = Icon
