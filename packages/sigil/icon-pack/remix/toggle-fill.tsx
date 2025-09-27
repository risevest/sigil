import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 5h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </Svg>
  )
})
Icon.displayName = 'ToggleFill'
/**
 * Remix Icon: Toggle Fill
 * @see {@link https://remixicon.com/icon/toggle-fill Remix Icon Docs}
 */
export const ToggleFill = Icon
