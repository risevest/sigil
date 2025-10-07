import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#6DA544"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#F0F0F0"
          d="M11.305 23.913a2.61 2.61 0 0 0 2.608 2.608h7.826c0 1.201.974 2.174 2.174 2.174h2.609c1.2 0 2.174-.973 2.174-2.174v-2.608zM28.913 11.304v6.087c0 .96-.78 1.74-1.74 1.74v2.608a4.353 4.353 0 0 0 4.349-4.348v-6.087zM10.218 17.391c0 .96-.78 1.74-1.74 1.74v2.608a4.353 4.353 0 0 0 4.348-4.348v-6.087h-2.608z"
        />
        <Path
          fill="#F0F0F0"
          d="M25 11.304h2.609v6.087H25zM21.087 14.783a.435.435 0 0 1-.87 0v-3.479H17.61v3.479a.435.435 0 0 1-.87 0v-3.479h-2.608v3.479a3.047 3.047 0 0 0 3.043 3.043c.647 0 1.246-.203 1.74-.548a3.03 3.03 0 0 0 2.123.523 1.74 1.74 0 0 1-1.689 1.33v2.608a4.353 4.353 0 0 0 4.348-4.348v-6.087h-2.609z"
        />
        <Path fill="#F0F0F0" d="M14.13 19.13h3.914v2.609H14.13z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'SaudiArabia'
/**
 * Flags by `Deji.Zeal`: Saudi Arabia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SaudiArabia = Icon
