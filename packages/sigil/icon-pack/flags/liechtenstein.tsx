import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Liechtenstein = /* @__PURE__ */ memo(function Liechtenstein(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20c.87 0 20-2.609 20-2.609z"
        />
        <Path fill="#0052B4" d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20" />
        <Path
          fill="#FFDA44"
          d="M14.782 13.913a2.609 2.609 0 0 0-4.347-1.944v-1.534h.87v-1.74h-.87v-.869h-1.74v.87h-.87v1.739h.87v1.534a2.609 2.609 0 0 0-3.478 3.888v1.534h8.696v-1.534c.534-.478.87-1.171.87-1.944"
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
 * Flags by `Deji.Zeal`: Liechtenstein
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Liechtenstein }
