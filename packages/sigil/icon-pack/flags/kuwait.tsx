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
          d="M38.756 26.956A20 20 0 0 0 40 20c0-2.447-.44-4.79-1.244-6.956L20 11.304l-18.756 1.74A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956L20 28.696z"
        />
        <Path
          fill="#D80027"
          d="M20 40c8.6 0 15.93-5.428 18.756-13.044H1.244C4.07 34.572 11.401 40 20 40"
        />
        <Path
          fill="#6DA544"
          d="M20 0C11.4 0 4.07 5.427 1.244 13.043h37.512C35.93 5.427 28.6 0 20 0"
        />
        <Path
          fill="#000"
          d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284l7.186-7.186V13.044z"
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
Icon.displayName = 'Kuwait'
/**
 * Flags by `Deji.Zeal`: Kuwait
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Kuwait = Icon
