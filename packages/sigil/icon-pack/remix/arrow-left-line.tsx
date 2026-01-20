import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftLine = /* @__PURE__ */ memo(function ArrowLeftLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Line
 * @see {@link https://remixicon.com/icon/arrow-left-line Remix Icon Docs}
 */
export { ArrowLeftLine }
