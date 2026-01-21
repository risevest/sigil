import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const UnitedKingdom = /* @__PURE__ */ memo(function UnitedKingdom(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#0052B4"
          d="M4.135 7.824a19.9 19.9 0 0 0-3.446 6.959h10.405zM39.31 14.783a19.9 19.9 0 0 0-3.445-6.96l-6.959 6.96zM.69 25.218a19.9 19.9 0 0 0 3.445 6.959l6.959-6.96zM32.176 4.135a19.9 19.9 0 0 0-6.96-3.446v10.405zM7.824 35.866a19.9 19.9 0 0 0 6.96 3.445V28.907zM14.783.69a19.9 19.9 0 0 0-6.959 3.444l6.96 6.96zM25.217 39.311a19.9 19.9 0 0 0 6.959-3.445l-6.96-6.96zM28.906 25.218l6.96 6.959a19.9 19.9 0 0 0 3.445-6.96z"
        />
        <Path
          fill="#D80027"
          d="M39.83 17.391H22.61V.17a20.2 20.2 0 0 0-5.218 0v17.222H.17a20.2 20.2 0 0 0 0 5.218h17.222V39.83a20.2 20.2 0 0 0 5.218 0V22.609H39.83a20.2 20.2 0 0 0 0-5.218"
        />
        <Path
          fill="#D80027"
          d="m25.217 25.218 8.925 8.924q.614-.616 1.175-1.284l-7.64-7.64zM14.782 25.218l-8.925 8.924q.617.615 1.284 1.176l7.641-7.641zM14.782 14.783 5.857 5.858q-.615.617-1.175 1.284l7.64 7.64zM25.217 14.783l8.925-8.925q-.617-.615-1.284-1.176l-7.641 7.641z"
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
 * Flags by `Deji.Zeal`: United Kingdom
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { UnitedKingdom }
