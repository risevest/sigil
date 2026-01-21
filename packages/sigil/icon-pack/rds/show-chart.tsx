import { memo } from 'react'
import Svg, { Mask, Path, G } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShowChart = /* @__PURE__ */ memo(function ShowChart(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 25 24" width={size} height={size} {...props}>
      <Mask
        id="a"
        width={25}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <Path d="M.891 0h24v24h-24z" />
      </Mask>
      <G mask="url(#a)">
        <Path d="M4.39 18.5 2.89 17l7.5-7.5 4 4 7.1-8 1.4 1.4-8.5 9.6-4-4z" />
      </G>
    </Svg>
  )
})
export { ShowChart }
