import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Brazil = /* @__PURE__ */ memo(function Brazil(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#6DA544"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path fill="#FFDA44" d="M20 7.826 36.522 20 20 32.174 3.48 20z" />
        <Path
          fill="#F0F0F0"
          d="M20 26.957a6.956 6.956 0 1 0 0-13.913 6.956 6.956 0 0 0 0 13.912"
        />
        <Path
          fill="#0052B4"
          d="M16.522 19.565c-1.21 0-2.377.184-3.476.526a6.955 6.955 0 0 0 12.651 3.9 11.72 11.72 0 0 0-9.175-4.426M26.828 21.333a6.956 6.956 0 0 0-13.22-4.078 14.4 14.4 0 0 1 2.914-.298c4.04 0 7.695 1.68 10.306 4.376"
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
 * Flags by `Deji.Zeal`: Brazil
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Brazil }
