import { memo } from 'react'
import Svg, { G, Path, Circle, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const WifiActiveBlur = /* @__PURE__ */ memo(function WifiActiveBlur(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 89 88" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M44.496 49a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-4c1.38 0 2.632.56 3.536 1.464a1 1 0 1 1-1.415 1.415 2.99 2.99 0 0 0-2.12-.879c-.83 0-1.578.335-2.122.879a1 1 0 1 1-1.415-1.415A5 5 0 0 1 44.496 45m0-4a8.97 8.97 0 0 1 6.364 2.636 1 1 0 0 1-1.414 1.414 6.97 6.97 0 0 0-4.95-2.05 6.98 6.98 0 0 0-4.95 2.05 1 1 0 0 1-1.414-1.414A8.98 8.98 0 0 1 44.496 41m0-4c3.59 0 6.84 1.456 9.192 3.808a1 1 0 0 1-1.414 1.414A10.96 10.96 0 0 0 44.496 39a10.96 10.96 0 0 0-7.778 3.222 1 1 0 0 1-1.414-1.414A12.96 12.96 0 0 1 44.496 37"
        />
      </G>
      <G filter="url(#b)">
        <Circle cx={44.5} cy={44} r={10} fill={color} />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M32.5 32h24v24h-24z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
export { WifiActiveBlur }
