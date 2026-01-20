import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Ecuador = /* @__PURE__ */ memo(function Ecuador(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path fill="#FFDA44" d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20l-20 1.739z" />
        <Path
          fill="#D80027"
          d="M2.676 30C6.134 35.978 12.596 40 20 40c7.402 0 13.865-4.022 17.323-10L20 28.695z"
        />
        <Path
          fill="#0052B4"
          d="M37.324 30A19.9 19.9 0 0 0 40 20H0c0 3.643.975 7.058 2.676 10z"
        />
        <Path
          fill="#FFDA44"
          d="M20 26.956a6.956 6.956 0 1 0 0-13.913 6.956 6.956 0 0 0 0 13.913"
        />
        <Path
          fill="#338AF3"
          d="M20 24.348A4.353 4.353 0 0 1 15.652 20V17.39A4.353 4.353 0 0 1 20 13.043a4.353 4.353 0 0 1 4.348 4.348V20A4.353 4.353 0 0 1 20 24.348"
        />
        <Path
          fill="#000"
          d="M26.956 9.565H21.74a1.74 1.74 0 0 0-3.479 0h-5.217c0 .96.837 1.74 1.797 1.74h-.058c0 .96.779 1.738 1.74 1.738 0 .961.778 1.74 1.738 1.74h3.479c.96 0 1.739-.779 1.739-1.74.96 0 1.739-.778 1.739-1.739h-.058c.96 0 1.797-.778 1.797-1.739"
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
 * Flags by `Deji.Zeal`: Ecuador
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Ecuador }
