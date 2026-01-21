import { memo } from 'react'
import Svg, { Mask, Path, G } from 'react-native-svg'
import type { IconProps } from '../../types'
const LocalMall = /* @__PURE__ */ memo(function LocalMall(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 25 25" width={size} height={size} {...props}>
      <Mask
        id="a"
        width={25}
        height={25}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <Path fill={color} d="M.891.5h24v24h-24z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fill={color}
          d="M5.89 22.5q-.825 0-1.412-.587a1.93 1.93 0 0 1-.587-1.413v-12q0-.824.587-1.412A1.93 1.93 0 0 1 5.891 6.5h2q0-2.075 1.462-3.537Q10.815 1.5 12.891 1.5q2.074 0 3.537 1.463 1.463 1.462 1.463 3.537h2q.825 0 1.412.588.588.587.588 1.412v12q0 .824-.588 1.413a1.93 1.93 0 0 1-1.412.587zm7-8q2.076 0 3.538-1.463 1.463-1.463 1.463-3.537h-2q0 1.25-.875 2.125a2.9 2.9 0 0 1-2.125.875 2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9.89 9.5h-2q0 2.075 1.462 3.537 1.462 1.463 3.538 1.463m-3-8h6q0-1.25-.874-2.125A2.9 2.9 0 0 0 12.89 3.5q-1.25 0-2.125.875A2.9 2.9 0 0 0 9.89 6.5"
        />
      </G>
    </Svg>
  )
})
export { LocalMall }
