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
          d="M0 20c0 2.447.44 4.79 1.244 6.957L20 28.696l18.756-1.74A20 20 0 0 0 40 20c0-2.446-.44-4.79-1.244-6.956L20 11.304l-18.756 1.74A20 20 0 0 0 0 20"
        />
        <Path
          fill="#D80027"
          d="M38.756 13.044C35.93 5.428 28.6 0 20 0S4.07 5.428 1.244 13.044zM1.244 26.957C4.07 34.572 11.401 40 20 40s15.93-5.428 18.756-13.044z"
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
Icon.displayName = 'Spain'
/**
 * Flags by `Deji.Zeal`: Spain
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Spain = Icon
