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
        <Path
          fill="#338AF3"
          d="M20 14.783h19.311a19.9 19.9 0 0 0-2.246-5.218H20zM7.55 35.652h24.9a20.1 20.1 0 0 0 4.615-5.217H2.935a20.1 20.1 0 0 0 4.615 5.217M6.957 4.839a20.1 20.1 0 0 0-4.021 4.726h4.02zM20 20v-5.217h-7.826V20H6.956v-5.217H.69A20 20 0 0 0 0 20c0 1.805.24 3.554.689 5.217h38.622C39.76 23.554 40 21.805 40 20zM20 0c-2.777 0-5.422.567-7.826 1.59v7.975H20V4.348h12.45A19.9 19.9 0 0 0 20 0"
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
Icon.displayName = 'Greece'
/**
 * Flags by `Deji.Zeal`: Greece
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Greece = Icon
