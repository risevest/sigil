import { memo } from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Rect width={40} height={40} fill="#D72727" rx={20} />
        <Path fill="#FFC61F" d="M-7.533-3.6 40 20.116-7.867 44-55.4 20.283z" />
        <Path fill="#231F20" d="M-2.531-3.6 17 20.116-2.669 44-22.2 20.283z" />
        <Path
          fill="#fff"
          d="m5.41 13.854 2.351 3.62 4.17-1.117-2.717 3.354 2.351 3.62-4.03-1.546-2.716 3.354.226-4.31-4.03-1.547 4.17-1.118z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={40} height={40} fill="#fff" rx={20} />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'TimorLeste'
/**
 * Flags by `Deji.Zeal`: Timor Leste
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const TimorLeste = Icon
