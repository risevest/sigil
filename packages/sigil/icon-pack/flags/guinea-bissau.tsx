import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const GuineaBissau = /* @__PURE__ */ memo(function GuineaBissau(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#FFDA44"
          d="M20 0c-1.806 0-3.555.24-5.218.689L13.043 20l1.74 19.311A20 20 0 0 0 20 40c11.045 0 20-8.954 20-20S31.045 0 20 0"
        />
        <Path
          fill="#6DA544"
          d="m13.043 20 1.74 19.311A20 20 0 0 0 20 40c11.045 0 20-8.954 20-20z"
        />
        <Path
          fill="#D80027"
          d="M0 20c0 7.58 4.218 14.176 10.435 17.568V2.432C4.218 5.824 0 12.419 0 20"
        />
        <Path
          fill="#D80027"
          d="M0 20c0 9.24 6.267 17.016 14.783 19.311V.689C6.267 2.984 0 10.759 0 20"
        />
        <Path
          fill="#000"
          d="m7.557 14.783 1.295 3.985h4.191l-3.39 2.464 1.294 3.985-3.39-2.463-3.39 2.463 1.295-3.985-3.39-2.464h4.19z"
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
 * Flags by `Deji.Zeal`: Guinea Bissau
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { GuineaBissau }
