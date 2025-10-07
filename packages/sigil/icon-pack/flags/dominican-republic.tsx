import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path fill="#D80027" d="M.688 25.217a20.04 20.04 0 0 0 14.094 14.094V25.217z" />
        <Path fill="#0052B4" d="M14.782.689A20.04 20.04 0 0 0 .688 14.783h14.094z" />
        <Path fill="#D80027" d="M39.311 14.783A20.04 20.04 0 0 0 25.218.689v14.094z" />
        <Path fill="#0052B4" d="M25.218 39.311A20.04 20.04 0 0 0 39.31 25.217H25.218z" />
        <Path
          fill="#496E2D"
          d="M25.217 20a5.217 5.217 0 1 1-10.435 0c0-2.881 5.218-5.217 5.218-5.217s5.217 2.336 5.217 5.217"
        />
        <Path fill="#0052B4" d="M14.782 20a5.217 5.217 0 0 1 10.435 0" />
        <Path fill="#D80027" d="M17.065 17.391v3.261a2.935 2.935 0 1 0 5.87 0v-3.26z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'DominicanRepublic'
/**
 * Flags by `Deji.Zeal`: Dominican Republic
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const DominicanRepublic = Icon
