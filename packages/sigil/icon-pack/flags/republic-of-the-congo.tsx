import { memo } from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const RepublicOfTheCongo = /* @__PURE__ */ memo(function RepublicOfTheCongo(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Rect width={40} height={40} fill="#DC241F" rx={20} />
        <Path fill="#009543" d="m-10.6 17 38.86-28.177 7.983 11.01-38.86 28.177z" />
        <Path fill="#DC241F" d="M4.4 39.177 43.26 11l7.983 11.01-38.86 28.177z" />
        <Path fill="#FBDE4A" d="M-3 28.177 35.86 0l7.748 10.687-38.86 28.176z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={40} height={40} fill="#fff" rx={20} />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
/**
 * Flags by `Deji.Zeal`: Republic Of The Congo
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { RepublicOfTheCongo }
