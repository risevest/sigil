import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    </Svg>
  )
})
Icon.displayName = 'StopLargeFill'
/**
 * Remix Icon: Stop Large Fill
 * @see {@link https://remixicon.com/icon/stop-large-fill Remix Icon Docs}
 */
export const StopLargeFill = Icon
