import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const WeightLine = /* @__PURE__ */ memo(function WeightLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1.465 2a4 4 0 1 0-6.93 0H5.066a1 1 0 0 0-.986.832l-1.88 11A1 1 0 0 0 3.186 21h17.629a1 1 0 0 0 .986-1.169l-1.88-11A1 1 0 0 0 18.934 8zM12 10h6.091l1.538 9H4.372l1.539-9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Weight Line
 * @see {@link https://remixicon.com/icon/weight-line Remix Icon Docs}
 */
export { WeightLine }
