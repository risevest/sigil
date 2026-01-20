import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Djibouti = /* @__PURE__ */ memo(function Djibouti(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#338AF3"
          d="M18.26 21.74S5.87 5.854 5.858 5.857A19.94 19.94 0 0 1 20 0c11.045 0 20 8.954 20 20z"
        />
        <Path
          fill="#6DA544"
          d="M18.26 20S5.87 34.145 5.858 34.142A19.94 19.94 0 0 0 20 40c11.045 0 20-8.954 20-20z"
        />
        <Path fill="#F0F0F0" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
        <Path
          fill="#D80027"
          d="m8.094 14.783 1.295 3.985h4.191l-3.39 2.464 1.295 3.985-3.39-2.463-3.391 2.463 1.295-3.985-3.39-2.464h4.19z"
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
 * Flags by `Deji.Zeal`: Djibouti
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Djibouti }
