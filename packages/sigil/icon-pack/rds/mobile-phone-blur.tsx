import { memo } from 'react'
import Svg, { G, Path, Circle, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const MobilePhoneBlur = /* @__PURE__ */ memo(function MobilePhoneBlur(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 88 88" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill={color}
          fillRule="evenodd"
          d="M44 34a1 1 0 0 1 0 2h-4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 1 2 0v7a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V37a3 3 0 0 1 3-3zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6-15a1 1 0 0 1 .946.677l.13.378a3 3 0 0 0 1.869 1.87l.378.129a1 1 0 0 1 0 1.892l-.378.13a3 3 0 0 0-1.87 1.869l-.129.378a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.869-1.87l-.378-.129a1 1 0 0 1 0-1.892l.378-.13a3 3 0 0 0 1.87-1.869l.129-.378A1 1 0 0 1 50 33m0 3.196a5 5 0 0 1-.804.804q.448.355.804.804.355-.448.804-.804a5 5 0 0 1-.804-.804"
          clipRule="evenodd"
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
export { MobilePhoneBlur }
