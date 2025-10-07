import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#FFDA44"
          d="M38.016 28.696A19.9 19.9 0 0 0 40 20a19.9 19.9 0 0 0-1.984-8.696L20 10.434l-18.015.87A19.9 19.9 0 0 0 0 20c0 3.116.713 6.066 1.985 8.696l18.015.87z"
        />
        <Path
          fill="#000"
          d="M20 0C12.07 0 5.22 4.614 1.984 11.304h36.031C34.78 4.614 27.93 0 20 0"
        />
        <Path
          fill="#0052B4"
          d="M20 40c-7.93 0-14.78-4.614-18.016-11.304h36.031C34.78 35.386 27.93 40 20 40"
        />
        <Path
          fill="#A2001D"
          d="M39.056 13.913H.944A20 20 0 0 0 0 20c0 2.122.332 4.167.944 6.087h38.112c.612-1.92.944-3.965.944-6.087 0-2.123-.332-4.168-.944-6.087"
        />
        <Path
          fill="#FFDA44"
          d="M6.957 19.13h26.087v1.74H6.957zM10.436 15.652h19.13v1.74h-19.13z"
        />
        <Path
          fill="#F0F0F0"
          d="M29.69 20s-4.472 5.217-9.69 5.217S14.784 20 14.784 20s0-5.217 5.218-5.217c5.217 0 9.69 5.217 9.69 5.217"
        />
        <Path
          fill="#000"
          d="M20 25.217c-5.217 0-9.69-5.217-9.69-5.217s4.473-5.217 9.69-5.217"
        />
        <Path fill="#F0F0F0" d="M16.522 18.26h1.739v3.479h-1.74z" />
        <Path fill="#000" d="M21.738 18.26h1.74v3.479h-1.74z" />
        <Path
          fill="#0052B4"
          d="M6.956 21.739a1.74 1.74 0 1 0 0-3.478 1.74 1.74 0 0 0 0 3.478M33.044 21.739a1.74 1.74 0 1 0 0-3.478 1.74 1.74 0 0 0 0 3.478"
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
Icon.displayName = 'Swaziland'
/**
 * Flags by `Deji.Zeal`: Swaziland
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Swaziland = Icon
