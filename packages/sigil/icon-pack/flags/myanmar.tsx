import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Myanmar = /* @__PURE__ */ memo(function Myanmar(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#6DA544"
          d="M38.756 26.956A20 20 0 0 0 40 20c0-2.447-.44-4.79-1.244-6.957L20 11.304l-18.756 1.74A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956L20 28.696z"
        />
        <Path
          fill="#FFDA44"
          d="M38.756 13.044C35.93 5.428 28.6 0 20 0S4.07 5.428 1.244 13.044z"
        />
        <Path
          fill="#D80027"
          d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40"
        />
        <Path
          fill="#F0F0F0"
          d="M33.715 16.92H23.238L20 6.958l-3.238 9.964H6.285l8.476 6.158-3.237 9.965L20 26.957l8.476 6.087-3.237-9.965z"
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
 * Flags by `Deji.Zeal`: Myanmar
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Myanmar }
