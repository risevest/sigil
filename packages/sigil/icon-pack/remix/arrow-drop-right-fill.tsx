import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowDropRightFill = /* @__PURE__ */ memo(function ArrowDropRightFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m14 12-4 4V8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Drop Right Fill
 * @see {@link https://remixicon.com/icon/arrow-drop-right-fill Remix Icon Docs}
 */
export { ArrowDropRightFill }
