import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowDropLeftLine = /* @__PURE__ */ memo(function ArrowDropLeftLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m11.828 12 2.829 2.829-1.414 1.414L9 12.001l4.243-4.243 1.414 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Drop Left Line
 * @see {@link https://remixicon.com/icon/arrow-drop-left-line Remix Icon Docs}
 */
export { ArrowDropLeftLine }
