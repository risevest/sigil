import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const EquatorialGuinea = /* @__PURE__ */ memo(function EquatorialGuinea(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#6DA544"
          d="M12.174 13.044h26.582C35.93 5.427 28.599 0 20 0A19.93 19.93 0 0 0 5.858 5.858z"
        />
        <Path
          fill="#D80027"
          d="M12.174 26.956h26.582C35.93 34.572 28.599 40 20 40A19.93 19.93 0 0 1 5.858 34.14z"
        />
        <Path fill="#0052B4" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
        <Path
          fill="#DEDDE0"
          d="M23.479 16.522v4.348c0 2.662 3.478 3.478 3.478 3.478s3.478-.816 3.478-3.479v-4.347z"
        />
        <Path fill="#786145" d="M26.087 20.087h1.74v2.522h-1.74z" />
        <Path
          fill="#6DA544"
          d="M28.696 19.13a1.74 1.74 0 1 0-3.479 0 .87.87 0 0 0 0 1.74h3.479a.87.87 0 0 0 0-1.74"
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
 * Flags by `Deji.Zeal`: Equatorial Guinea
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { EquatorialGuinea }
