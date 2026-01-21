import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Qatar = /* @__PURE__ */ memo(function Qatar(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#751A46"
          d="M40 20C40 8.954 31.046 0 20 0A19.9 19.9 0 0 0 9.355 3.066L13.74 4.93 7.826 7.441l5.913 2.513-5.913 2.512 5.913 2.512-5.913 2.512L13.74 20l-5.913 2.513 5.913 2.512-5.913 2.511 5.913 2.512-5.913 2.513 5.913 2.511-4.382 1.862A19.9 19.9 0 0 0 20 40c11.046 0 20-8.954 20-20"
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
 * Flags by `Deji.Zeal`: Qatar
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Qatar }
