import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftBoxLine = /* @__PURE__ */ memo(function ArrowLeftBoxLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm1.344-6.999L12 6.344l1.414 1.414-3.243 3.243h7.485v2h-7.485l3.243 3.243L12 17.658z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left Box Line
 * @see {@link https://remixicon.com/icon/arrow-left-box-line Remix Icon Docs}
 */
export { ArrowLeftBoxLine }
