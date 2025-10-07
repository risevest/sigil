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
          d="M1.244 26.957C4.07 34.572 11.401 40 20 40s15.93-5.428 18.756-13.043L20 25.217z"
        />
        <Path
          fill="#000"
          d="M20 0C11.4 0 4.07 5.428 1.244 13.044L20 14.783l18.756-1.74C35.93 5.429 28.6 0 20 0"
        />
        <Path
          fill="#D80027"
          d="M1.244 13.044A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956h37.512A20 20 0 0 0 40 20c0-2.446-.44-4.79-1.244-6.956z"
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
Icon.displayName = 'Germany'
/**
 * Flags by `Deji.Zeal`: Germany
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Germany = Icon
