import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandLeftRightLine = /* @__PURE__ */ memo(function ExpandLeftRightLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9.043 5.793 2.836 12l6.207 6.207 1.414-1.414L5.664 12l4.793-4.793zm5.914 12.414L21.164 12l-6.207-6.207-1.414 1.414L18.336 12l-4.793 4.793z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Left Right Line
 * @see {@link https://remixicon.com/icon/expand-left-right-line Remix Icon Docs}
 */
export { ExpandLeftRightLine }
