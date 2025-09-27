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
          d="M40 20c0-2.446-.44-4.79-1.244-6.956L20 12.174l-18.756.87A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956l18.756.87 18.756-.87A20 20 0 0 0 40 20"
        />
        <Path
          fill="#6DA544"
          d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40"
        />
        <Path
          fill="#D80027"
          d="M1.244 13.044h37.512C35.93 5.428 28.6 0 20 0S4.07 5.428 1.244 13.044"
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
Icon.displayName = 'Bolivia'
/**
 * Flags by `Deji.Zeal`: Bolivia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Bolivia = Icon
