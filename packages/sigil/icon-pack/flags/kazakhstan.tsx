import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Kazakhstan = /* @__PURE__ */ memo(function Kazakhstan(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#338AF3"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#FFDA44"
          d="M31.304 20.217H8.695c0 1.561 1.36 2.826 2.92 2.826h-.094a2.826 2.826 0 0 0 2.826 2.826 2.826 2.826 0 0 0 2.827 2.827h5.652a2.826 2.826 0 0 0 2.826-2.827 2.826 2.826 0 0 0 2.826-2.826h-.094c1.56 0 2.92-1.265 2.92-2.826"
        />
        <Path fill="#338AF3" d="M27.826 16.522a7.826 7.826 0 0 1-15.652 0" />
        <Path
          fill="#FFDA44"
          d="m25.978 16.522-2.443 1.149 1.301 2.365-2.652-.507-.336 2.68L20 20.236l-1.847 1.971-.336-2.68-2.653.508 1.301-2.366-2.442-1.148 2.442-1.15-1.3-2.365 2.652.508.336-2.68L20 12.805l1.848-1.97.336 2.68 2.652-.508-1.3 2.366z"
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
 * Flags by `Deji.Zeal`: Kazakhstan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Kazakhstan }
