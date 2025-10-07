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
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#000"
          d="M5.857 34.142a20 20 0 0 0 2.673 2.246L36.387 8.531a20.1 20.1 0 0 0-4.919-4.919L3.611 31.47a20 20 0 0 0 2.246 2.673"
        />
        <Path
          fill="#6DA544"
          d="M5.857 5.858c-6.31 6.31-7.52 15.785-3.636 23.312L29.169 2.221C21.643-1.663 12.167-.452 5.857 5.858"
        />
        <Path
          fill="#338AF3"
          d="M34.142 34.142c6.31-6.31 7.521-15.786 3.637-23.312L10.83 37.778c7.527 3.885 17.003 2.674 23.312-3.636"
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
Icon.displayName = 'Tanzania'
/**
 * Flags by `Deji.Zeal`: Tanzania
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Tanzania = Icon
