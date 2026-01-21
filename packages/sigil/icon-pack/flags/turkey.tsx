import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Turkey = /* @__PURE__ */ memo(function Turkey(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#F0F0F0"
          d="m19.18 16.343 1.642 2.261 2.658-.862-1.644 2.26 1.64 2.261-2.656-.865-1.643 2.26.001-2.794-2.657-.865 2.658-.862z"
        />
        <Path
          fill="#F0F0F0"
          d="M14.703 25.652a5.652 5.652 0 1 1 2.688-10.625 6.956 6.956 0 1 0 0 9.946c-.8.433-1.715.68-2.688.68"
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
 * Flags by `Deji.Zeal`: Turkey
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Turkey }
