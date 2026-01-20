import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Afghanistan = /* @__PURE__ */ memo(function Afghanistan(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="M28.696 1.985A19.9 19.9 0 0 0 20 0a19.9 19.9 0 0 0-8.695 1.985L9.565 20l1.74 18.016A19.9 19.9 0 0 0 20 40a19.9 19.9 0 0 0 8.696-1.984L30.435 20z"
        />
        <Path
          fill="#000"
          d="M11.304 1.985C4.614 5.22 0 12.071 0 20s4.615 14.78 11.304 18.015z"
        />
        <Path
          fill="#496E2D"
          d="M28.695 1.985v36.03C35.385 34.78 40 27.929 40 20S35.385 5.22 28.695 1.985"
        />
        <Path
          fill="#FFDA44"
          d="M20 13.044a6.956 6.956 0 1 0 0 13.912 6.956 6.956 0 0 0 0-13.912m0 11.304a4.348 4.348 0 1 1 0-8.696 4.348 4.348 0 0 1 0 8.696"
        />
        <Path
          fill="#FFDA44"
          d="M20 17.392c-.96 0-1.74.778-1.74 1.739v2.608h3.479v-2.608c0-.96-.779-1.74-1.74-1.74"
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
 * Flags by `Deji.Zeal`: Afghanistan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Afghanistan }
