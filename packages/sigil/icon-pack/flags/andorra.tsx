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
          d="M11.305 38.016A19.9 19.9 0 0 0 20 40a19.9 19.9 0 0 0 8.696-1.984L30.435 20l-1.74-18.015A19.9 19.9 0 0 0 20 0a19.9 19.9 0 0 0-8.695 1.985L9.565 20z"
        />
        <Path
          fill="#D80027"
          d="M28.695 38.015C35.385 34.78 40 27.929 40 20S35.385 5.22 28.695 1.985z"
        />
        <Path
          fill="#0052B4"
          d="M11.304 38.015V1.985C4.614 5.22 0 12.071 0 20s4.614 14.78 11.304 18.015"
        />
        <Path
          fill="#D80027"
          d="M20 26.957V20h5.217v2.609c0 .453-.87 2.113-3.015 3.478-.813.517-1.655.683-2.202.87M14.782 14.783H20V20h-5.218z"
        />
        <Path
          fill="#FF9811"
          d="M22.608 13.044A1.74 1.74 0 0 0 20 11.539a1.74 1.74 0 0 0-2.609 1.505h-4.348v8.695c0 3.237 2.57 5.11 4.587 6.08A1.74 1.74 0 0 0 20 30.2a1.74 1.74 0 0 0 2.37-2.381c2.015-.97 4.586-2.843 4.586-6.08v-8.695zm1.74 8.695c0 .453 0 1.832-2.147 3.197-.813.517-1.654.852-2.201 1.038a10.5 10.5 0 0 1-2.202-1.038c-2.146-1.365-2.146-2.744-2.146-3.197v-6.087h8.695z"
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
Icon.displayName = 'Andorra'
/**
 * Flags by `Deji.Zeal`: Andorra
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Andorra = Icon
