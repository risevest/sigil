import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Portugal = /* @__PURE__ */ memo(function Portugal(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#6DA544"
          d="M0 20c0 8.6 5.428 15.93 13.043 18.756L14.783 20l-1.74-18.756C5.428 4.07 0 11.4 0 20"
        />
        <Path
          fill="#D80027"
          d="M40 20C40 8.954 31.045 0 20 0c-2.447 0-4.79.44-6.957 1.244v37.512A20 20 0 0 0 20 40c11.045 0 20-8.954 20-20"
        />
        <Path
          fill="#FFDA44"
          d="M13.043 26.956a6.956 6.956 0 1 0 0-13.913 6.956 6.956 0 0 0 0 13.913"
        />
        <Path fill="#D80027" d="M9.13 16.522v4.348a3.913 3.913 0 1 0 7.826 0v-4.348z" />
        <Path
          fill="#F0F0F0"
          d="M13.044 22.174c-.72 0-1.305-.585-1.305-1.304v-1.74h2.609v1.74c0 .719-.585 1.304-1.304 1.304"
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
 * Flags by `Deji.Zeal`: Portugal
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Portugal }
