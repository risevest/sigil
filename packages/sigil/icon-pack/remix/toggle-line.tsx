import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ToggleLine = /* @__PURE__ */ memo(function ToggleLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 7a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10zm0-2h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </Svg>
  )
})
/**
 * Remix Icon: Toggle Line
 * @see {@link https://remixicon.com/icon/toggle-line Remix Icon Docs}
 */
export { ToggleLine }
