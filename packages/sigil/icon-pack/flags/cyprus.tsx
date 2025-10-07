import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#FCFCFC"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#6DA544"
          d="M31.304 17.391h-2.609a8.696 8.696 0 1 1-17.391 0H8.695c0 5.173 3.475 9.535 8.218 10.878-.52.988-.44 2.232.302 3.159l2.843-2.278 2.842 2.278c.75-.937.824-2.196.287-3.189 4.69-1.376 8.117-5.711 8.117-10.848"
        />
        <Path
          fill="#FFDA44"
          d="M13.044 16.522s0 4.348 4.348 4.348l.87.87H20s.87-2.61 2.61-2.61c0 0 0-1.739 1.738-1.739h2.609s-.87-3.478 3.478-6.087l-1.739-.87s-6.087 4.349-10.435 3.48v1.738h-1.739l-.87-.87z"
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
Icon.displayName = 'Cyprus'
/**
 * Flags by `Deji.Zeal`: Cyprus
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Cyprus = Icon
