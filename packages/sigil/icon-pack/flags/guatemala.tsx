import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Guatemala = /* @__PURE__ */ memo(function Guatemala(_props: IconProps) {
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
          d="M40 20c0-7.93-4.615-14.78-11.305-18.016v36.031C35.385 34.78 40 27.93 40 20M0 20c0 7.929 4.614 14.78 11.304 18.015V1.985C4.614 5.218 0 12.07 0 20"
        />
        <Path
          fill="#ACABB1"
          d="M25.226 23.382 21.845 20l3.219-3.22-.146-1.7-.922-.92L20 18.154l-3.996-3.996-.922.922-.146 1.7 3.22 3.22-3.383 3.38 1.845 1.845L20 21.845l3.382 3.381z"
        />
        <Path
          fill="#6DA544"
          d="m24.918 15.081-1.844 1.845a4.348 4.348 0 1 1-6.149 0l-1.844-1.845a6.956 6.956 0 1 0 9.838 0"
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
 * Flags by `Deji.Zeal`: Guatemala
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Guatemala }
