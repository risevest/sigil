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
          d="M1.985 11.304A19.9 19.9 0 0 0 0 20c0 3.116.713 6.066 1.985 8.696L20 30.435l18.016-1.74A19.9 19.9 0 0 0 40 20c0-3.116-.713-6.066-1.984-8.696L20 9.565z"
        />
        <Path
          fill="#000"
          d="M1.984 28.696C5.22 35.386 12.07 40 20 40s14.78-4.614 18.015-11.304z"
        />
        <Path
          fill="#D80027"
          d="M1.984 11.304h36.03C34.779 4.614 27.928 0 19.999 0S5.22 4.614 1.984 11.304"
        />
        <Path fill="#496E2D" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'Sudan'
/**
 * Flags by `Deji.Zeal`: Sudan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Sudan = Icon
