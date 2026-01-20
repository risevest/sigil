import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerUpLeftLine = /* @__PURE__ */ memo(function CornerUpLeftLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 10v9h-2v-7H6.828l3.95 3.95-1.414 1.414L3 11l6.364-6.364 1.414 1.414L6.828 10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Corner Up Left Line
 * @see {@link https://remixicon.com/icon/corner-up-left-line Remix Icon Docs}
 */
export { CornerUpLeftLine }
