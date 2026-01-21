import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Libya = /* @__PURE__ */ memo(function Libya(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#000"
          d="M1.985 11.304A19.9 19.9 0 0 0 0 20c0 3.116.713 6.066 1.985 8.696L20 30.435l18.016-1.74A19.9 19.9 0 0 0 40 20c0-3.116-.713-6.066-1.984-8.696L20 9.565z"
        />
        <Path
          fill="#496E2D"
          d="M1.985 28.696C5.22 35.386 12.071 40 20 40s14.78-4.614 18.015-11.304z"
        />
        <Path
          fill="#D80027"
          d="M1.985 11.304h36.03C34.78 4.614 27.929 0 20 0S5.22 4.614 1.985 11.304"
        />
        <Path
          fill="#F0F0F0"
          d="m24.655 16.343 1.64 2.261 2.658-.862-1.643 2.26 1.64 2.261-2.656-.865-1.644 2.26.002-2.794-2.657-.865 2.658-.862z"
        />
        <Path
          fill="#F0F0F0"
          d="M20.176 25.652a5.652 5.652 0 1 1 2.689-10.625 6.956 6.956 0 1 0 0 9.946c-.8.433-1.715.68-2.689.68"
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
 * Flags by `Deji.Zeal`: Libya
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Libya }
