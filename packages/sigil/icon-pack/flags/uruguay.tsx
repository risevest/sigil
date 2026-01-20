import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Uruguay = /* @__PURE__ */ memo(function Uruguay(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#338AF3"
          d="M20 14.783h19.311a19.9 19.9 0 0 0-2.246-5.218H20zM7.55 35.652h24.9a20.1 20.1 0 0 0 4.615-5.217H2.935a20.1 20.1 0 0 0 4.615 5.217M20 0v4.348h12.45A19.9 19.9 0 0 0 20 0"
        />
        <Path
          fill="#338AF3"
          d="M20 14.783h19.311a19.9 19.9 0 0 0-2.246-5.218H20zM0 20c0 1.805.24 3.554.689 5.217h38.622C39.76 23.554 40 21.805 40 20z"
        />
        <Path
          fill="#FFDA44"
          d="m17.391 11.705-2.443 1.149 1.301 2.365-2.652-.507-.336 2.68-1.848-1.971-1.847 1.97-.336-2.679-2.653.507 1.301-2.365-2.442-1.15 2.442-1.148-1.3-2.366 2.652.508.336-2.68 1.847 1.97 1.848-1.97.336 2.68 2.652-.508-1.3 2.366z"
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
 * Flags by `Deji.Zeal`: Uruguay
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Uruguay }
