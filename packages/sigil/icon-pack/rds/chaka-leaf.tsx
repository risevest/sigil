import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChakaLeaf = /* @__PURE__ */ memo(function ChakaLeaf(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 12 13" width={size} height={size} {...props}>
      <Path
        fill={color}
        d="M9.855 10.103a5.64 5.64 0 0 1-6.886.843L1.415 12.5l-.634-.634 1.451-1.45 1.848-1.85 1.282-.011 1.52-.015 2.287-5.707L3.46 5.118l-.028 2.8-1.848 1.848a5.633 5.633 0 0 1 .311-7.62 5.637 5.637 0 0 1 7.96 0 5.63 5.63 0 0 1 0 7.956z"
      />
    </Svg>
  )
})
export { ChakaLeaf }
