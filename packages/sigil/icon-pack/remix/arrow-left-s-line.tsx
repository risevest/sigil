import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftSLine = /* @__PURE__ */ memo(function ArrowLeftSLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m10.828 12 4.95 4.95-1.414 1.415L8 12l6.364-6.364 1.414 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left S Line
 * @see {@link https://remixicon.com/icon/arrow-left-s-line Remix Icon Docs}
 */
export { ArrowLeftSLine }
