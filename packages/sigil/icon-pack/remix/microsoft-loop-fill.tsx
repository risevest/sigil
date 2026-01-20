import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MicrosoftLoopFill = /* @__PURE__ */ memo(function MicrosoftLoopFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 12c0 5.523-4.477 10-10 10H6.665A7.99 7.99 0 0 0 10 15.5h2A3.5 3.5 0 1 0 8.5 12v3.5A6.5 6.5 0 0 1 2 22V12C2 6.477 6.477 2 12 2s10 4.477 10 10" />
    </Svg>
  )
})
/**
 * Remix Icon: Microsoft Loop Fill
 * @see {@link https://remixicon.com/icon/microsoft-loop-fill Remix Icon Docs}
 */
export { MicrosoftLoopFill }
