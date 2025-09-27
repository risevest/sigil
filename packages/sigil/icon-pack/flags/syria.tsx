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
          fill="#D80027"
          d="M20 0C11.4 0 4.07 5.428 1.244 13.044h37.512C35.93 5.428 28.6 0 20 0"
        />
        <Path
          fill="#000"
          d="M20 40c8.6 0 15.93-5.428 18.756-13.044H1.244C4.07 34.572 11.401 40 20 40"
        />
        <Path
          fill="#6DA544"
          d="m11.95 15.217 1.08 3.321h3.492l-2.825 2.053 1.079 3.322-2.825-2.053-2.826 2.053 1.08-3.322-2.826-2.053h3.492zM28.05 15.217l1.08 3.321h3.492l-2.826 2.053 1.08 3.322-2.826-2.053-2.825 2.053 1.079-3.322-2.825-2.053h3.492z"
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
Icon.displayName = 'Syria'
/**
 * Flags by `Deji.Zeal`: Syria
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Syria = Icon
