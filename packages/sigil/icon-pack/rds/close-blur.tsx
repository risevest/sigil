import { memo } from 'react'
import Svg, { G, Path, Circle, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const CloseBlur = /* @__PURE__ */ memo(function CloseBlur(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 88 88" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M44 34c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 2a8 8 0 1 0 0 16.001A8 8 0 0 0 44 36m-2.121 4.464L44 42.586l2.121-2.122a1 1 0 0 1 1.415 1.415l-2.122 2.12 2.122 2.122a1 1 0 1 1-1.415 1.415L44 45.414l-2.121 2.122a1 1 0 1 1-1.415-1.415L42.586 44l-2.121-2.121a1 1 0 0 1 1.414-1.415"
        />
      </G>
      <G filter="url(#b)">
        <Circle cx={44} cy={44} r={10} fill={color} />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M32 32h24v24H32z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
export { CloseBlur }
