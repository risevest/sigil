import { memo } from 'react'
import Svg, { G, Circle, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const CheckBlur = /* @__PURE__ */ memo(function CheckBlur(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 129 128" width={size} height={size} {...props}>
      <G filter="url(#a)">
        <Circle cx={64.375} cy={64} r={14} fill={color} />
      </G>
      <G clipPath="url(#b)">
        <Path
          fill={color}
          d="M64.375 54c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 2a8 8 0 1 0 0 16.001 8 8 0 0 0 0-16.001m3.535 4.381a1 1 0 0 1 1.498 1.32l-.083.094-5.586 5.587a1.1 1.1 0 0 1-1.46.085l-.096-.085-2.758-2.758a1 1 0 0 1 1.32-1.498l.094.084 2.122 2.121 4.95-4.95z"
        />
      </G>
      <Defs>
        <ClipPath id="b">
          <Path fill={color} d="M52.375 52h24v24h-24z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
export { CheckBlur }
