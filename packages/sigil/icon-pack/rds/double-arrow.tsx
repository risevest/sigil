import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DoubleArrow = /* @__PURE__ */ memo(function DoubleArrow(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 16 13" width={size} height={size} {...props}>
      <Path
        fill={color}
        d="m13.3 6.243-3.3-3.3.943-.943 4.242 4.243-4.242 4.242L10 9.543zM4.95 6.364 0 1.414 1.414 0l6.364 6.364-6.364 6.364L0 11.314z"
      />
    </Svg>
  )
})
export { DoubleArrow }
