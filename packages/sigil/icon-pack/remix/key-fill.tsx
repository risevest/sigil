import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const KeyFill = /* @__PURE__ */ memo(function KeyFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 14h-4.341a6 6 0 1 1 0-4H23v4h-2v4h-4zM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Key Fill
 * @see {@link https://remixicon.com/icon/key-fill Remix Icon Docs}
 */
export { KeyFill }
