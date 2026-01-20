import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Samoa = /* @__PURE__ */ memo(function Samoa(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20L20 0c11.046 0 20 8.954 20 20"
        />
        <Path fill="#0052B4" d="M20 20V0C8.954 0 0 8.954 0 20z" />
        <Path
          fill="#F0F0F0"
          d="m16.02 13.044.324.996h1.047l-.847.616.324.996-.848-.616-.848.616.324-.996-.848-.616h1.048zM10.758 5.217l.54 1.661h1.746l-1.412 1.026.54 1.661-1.414-1.026-1.412 1.026.54-1.66-1.413-1.027h1.746zM15.975 6.956l.54 1.661h1.746l-1.413 1.027.54 1.66-1.413-1.026-1.412 1.026.54-1.66-1.413-1.027h1.745zM11.852 13.913l.54 1.66h1.746L12.725 16.6l.54 1.66-1.413-1.026-1.412 1.027.54-1.661-1.414-1.026h1.747zM7.28 9.565l.54 1.661h1.746l-1.413 1.026.54 1.661-1.413-1.026-1.413 1.026.54-1.66-1.413-1.027H6.74z"
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
 * Flags by `Deji.Zeal`: Samoa
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Samoa }
