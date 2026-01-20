import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DoorFill = /* @__PURE__ */ memo(function DoorFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.998 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </Svg>
  )
})
/**
 * Remix Icon: Door Fill
 * @see {@link https://remixicon.com/icon/door-fill Remix Icon Docs}
 */
export { DoorFill }
