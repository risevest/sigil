import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowDropRightLine = /* @__PURE__ */ memo(function ArrowDropRightLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.172 12 9.343 9.173l1.415-1.414L15 12l-4.242 4.242-1.415-1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Drop Right Line
 * @see {@link https://remixicon.com/icon/arrow-drop-right-line Remix Icon Docs}
 */
export { ArrowDropRightLine }
