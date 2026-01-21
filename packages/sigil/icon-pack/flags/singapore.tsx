import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Singapore = /* @__PURE__ */ memo(function Singapore(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.955 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path fill="#D80027" d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20" />
        <Path
          fill="#F0F0F0"
          d="M12.173 10.435a6.09 6.09 0 0 1 4.783-5.946 6.087 6.087 0 1 0 0 11.89 6.09 6.09 0 0 1-4.783-5.944M19.999 4.782l.431 1.329h1.397l-1.13.821.432 1.329-1.13-.821-1.13.82.431-1.328-1.13-.821h1.397z"
        />
        <Path
          fill="#F0F0F0"
          d="m16.61 7.391.432 1.329h1.397l-1.13.821.431 1.329-1.13-.821-1.13.82.431-1.328-1.13-.821h1.397zM23.39 7.391l.43 1.329h1.398l-1.13.821.431 1.329-1.13-.821-1.13.82.432-1.328-1.13-.821h1.396zM22.085 11.304l.431 1.329h1.397l-1.13.82.432 1.33-1.13-.822-1.13.821.431-1.328-1.13-.821h1.397zM17.915 11.304l.431 1.329h1.397l-1.13.82.432 1.33-1.13-.822-1.13.821.431-1.328-1.13-.821h1.397z"
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
 * Flags by `Deji.Zeal`: Singapore
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Singapore }
