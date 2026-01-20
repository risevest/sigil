import { memo } from 'react'
import Svg, { G, Path, Circle, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const InfoBlur = /* @__PURE__ */ memo(function InfoBlur(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 89 88" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M44.5 34c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 2a8 8 0 1 0 0 16.001A8 8 0 0 0 44.5 36m-.01 6c.558 0 1.01.452 1.01 1.01v5.124A1 1 0 0 1 45 50h-.49a1.01 1.01 0 0 1-1.01-1.01V44a1 1 0 0 1 0-2zm.01-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
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
export { InfoBlur }
