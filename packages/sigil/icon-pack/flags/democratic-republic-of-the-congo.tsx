import { memo } from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const DemocraticRepublicOfTheCongo = /* @__PURE__ */ memo(
  function DemocraticRepublicOfTheCongo(_props: IconProps) {
    const { color = 'black', size = 24, ...props } = _props
    return (
      <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
        <G clipPath="url(#a)">
          <G clipPath="url(#b)">
            <Rect width={40} height={40} fill="#0182FF" rx={20} />
            <Path fill="#F00A17" d="M-6.4 36 42.594 1.365l3.233 4.573-48.994 34.635z" />
            <Path
              fill="#FCD504"
              d="m8 8.4 1.123 3.455h3.632L9.816 13.99l1.123 3.455L8 15.31l-2.939 2.135 1.123-3.455-2.94-2.135h3.633z"
            />
            <Path
              fill="#FFD600"
              d="M-7.4 34.835 41.594.2l.924 1.307-48.994 34.635zM-3.8 41.035 45.194 6.4l.924 1.307L-2.876 42.34z"
            />
          </G>
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h40v40H0z" />
          </ClipPath>
          <ClipPath id="b">
            <Rect width={40} height={40} fill="#fff" rx={20} />
          </ClipPath>
        </Defs>
      </Svg>
    )
  }
)
/**
 * Flags by `Deji.Zeal`: Democratic Republic Of The Congo
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { DemocraticRepublicOfTheCongo }
