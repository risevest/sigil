import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Lesotho = /* @__PURE__ */ memo(function Lesotho(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M0 20c0 3.116.713 6.066 1.985 8.696l18.015.87 18.016-.87A19.9 19.9 0 0 0 40 20a19.9 19.9 0 0 0-1.984-8.696L20 10.434l-18.015.87A19.9 19.9 0 0 0 0 20"
        />
        <Path
          fill="#6DA544"
          d="M20 40c7.929 0 14.78-4.614 18.015-11.304H1.985C5.218 35.386 12.07 40 20 40"
        />
        <Path
          fill="#0052B4"
          d="M20 0C12.07 0 5.22 4.614 1.984 11.304h36.031C34.78 4.614 27.93 0 20 0"
        />
        <Path
          fill="#000"
          d="M21.304 19.565v-4.783h-2.608v4.783l-3.151 3.15A5.21 5.21 0 0 0 20 25.218a5.21 5.21 0 0 0 4.455-2.501z"
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
 * Flags by `Deji.Zeal`: Lesotho
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Lesotho }
