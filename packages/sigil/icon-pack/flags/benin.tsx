import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#D80027"
          d="m13.043 18.26 1.74 21.051A20 20 0 0 0 20 40c11.045 0 20-8.954 20-20z"
        />
        <Path
          fill="#FFDA44"
          d="M13.043 20 14.782.689A20 20 0 0 1 20 0c11.045 0 20 8.954 20 20z"
        />
        <Path
          fill="#6DA544"
          d="M0 20c0 9.24 6.267 17.016 14.783 19.311V.689C6.267 2.984 0 10.759 0 20"
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
Icon.displayName = 'Benin'
/**
 * Flags by `Deji.Zeal`: Benin
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Benin = Icon
