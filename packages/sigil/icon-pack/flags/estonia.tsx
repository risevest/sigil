import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Estonia = /* @__PURE__ */ memo(function Estonia(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#000"
          d="M0 20c0 2.446.44 4.79 1.244 6.956l18.756.87 18.756-.87A20 20 0 0 0 40 20c0-2.447-.44-4.79-1.244-6.957L20 12.173l-18.756.87A20 20 0 0 0 0 20"
        />
        <Path
          fill="#0052B4"
          d="M20 0C11.4 0 4.07 5.427 1.244 13.044h37.512C35.93 5.427 28.6 0 20 0"
        />
        <Path
          fill="#F0F0F0"
          d="M38.756 26.956H1.244C4.07 34.572 11.401 40 20 40s15.93-5.428 18.756-13.044"
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
 * Flags by `Deji.Zeal`: Estonia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Estonia }
