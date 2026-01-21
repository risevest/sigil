import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Fiji = /* @__PURE__ */ memo(function Fiji(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#338AF3"
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20C0 20.005 20 .002 20 0c11.046 0 20 8.955 20 20"
        />
        <Path
          fill="#0052B4"
          d="M20 9.565v6.746l-6.956-6.746zM10.435 20h5.876l-5.876-7.826-.87 6.087z"
        />
        <Path
          fill="#F0F0F0"
          d="M19.946 20H20v-.053zM20 10.435V0h-.003C8.953.002 0 8.956 0 20h10.435v-5.876L16.31 20h3.636l.053-.053V16.31l-5.876-5.876z"
        />
        <Path
          fill="#D80027"
          d="M10.118 2.609a20.1 20.1 0 0 0-7.51 7.51V20h5.218V7.826H20V2.61z"
        />
        <Path fill="#D80027" d="m20 17.54-7.106-7.105h-2.46L20 20z" />
        <Path
          fill="#F3F3F3"
          d="M22.608 13.044V20c0 4.66 6.087 6.087 6.087 6.087s6.087-1.428 6.087-6.087v-6.956l-6.087-1.74z"
        />
        <Path
          fill="#D80027"
          d="M34.782 13.044v-2.61H22.608v2.61h5.218v5.217h-5.218v1.74h5.218v5.82c.524.185.87.266.87.266s.344-.08.869-.267V20h5.217v-1.739h-5.217v-5.217z"
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
 * Flags by `Deji.Zeal`: Fiji
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Fiji }
