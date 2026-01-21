import { memo } from 'react'
import Svg, { Rect, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CheckMark = /* @__PURE__ */ memo(function CheckMark(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 20 20" width={size} height={size} {...props}>
      <Rect width={20} height={20} rx={10} />
      <Path d="M6 11.267 8.311 13.4 14 7" />
    </Svg>
  )
})
export { CheckMark }
