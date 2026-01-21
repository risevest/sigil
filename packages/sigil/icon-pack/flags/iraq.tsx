import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Iraq = /* @__PURE__ */ memo(function Iraq(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#A2001D"
          d="M20 0C11.4 0 4.07 5.428 1.244 13.044h37.512C35.93 5.428 28.6 0 20 0"
        />
        <Path
          fill="#000"
          d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40"
        />
        <Path
          fill="#496E2D"
          d="M15.217 18.696h-3.856a1.74 1.74 0 0 1 1.682-1.305v-2.608a4.353 4.353 0 0 0-4.348 4.348v2.174h6.522c.24 0 .435.195.435.434v.87H6.956v2.608H18.26V21.74a3.047 3.047 0 0 0-3.043-3.043M21.739 22.609v-7.826h-2.61v10.435h4.349v-2.61zM30.435 22.609v-7.826h-2.61v7.826h-.869V20h-2.608v5.218h7.826v-2.61z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
/**
 * Flags by `Deji.Zeal`: Iraq
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Iraq }
