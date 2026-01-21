import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CloseFill = /* @__PURE__ */ memo(function CloseFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 10.587 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.949 4.95-1.414-1.415 4.95-4.95-4.95-4.95L7.05 5.638z" />
    </Svg>
  )
})
/**
 * Remix Icon: Close Fill
 * @see {@link https://remixicon.com/icon/close-fill Remix Icon Docs}
 */
export { CloseFill }
