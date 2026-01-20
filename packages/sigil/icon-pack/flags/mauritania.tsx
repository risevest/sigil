import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Mauritania = /* @__PURE__ */ memo(function Mauritania(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#496E2D"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#FFDA44"
          d="M20 23.106a6.96 6.96 0 0 1-6.795-5.466 6.956 6.956 0 1 0 13.59 0 6.96 6.96 0 0 1-6.796 5.466"
        />
        <Path
          fill="#FFDA44"
          d="m20 13.913.647 1.993h2.096l-1.695 1.232.647 1.992L20 17.9l-1.695 1.232.647-1.993-1.695-1.232h2.095z"
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
 * Flags by `Deji.Zeal`: Mauritania
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Mauritania }
