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
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.955 0 20s8.954 20 20 20"
        />
        <Path
          fill="#F0F0F0"
          d="M20 29.565A9.565 9.565 0 0 0 29.567 20a9.565 9.565 0 1 0-9.565 9.565"
        />
        <Path
          fill="#D80027"
          d="m21.177 16.343 1.64 2.261 2.659-.861-1.644 2.259 1.64 2.261-2.656-.865-1.643 2.26.001-2.794-2.656-.865 2.657-.862z"
        />
        <Path
          fill="#D80027"
          d="M22.173 25.652a5.652 5.652 0 1 1 2.689-10.625 6.957 6.957 0 1 0 0 9.945c-.8.434-1.715.68-2.689.68"
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
Icon.displayName = 'Tunisia'
/**
 * Flags by `Deji.Zeal`: Tunisia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Tunisia = Icon
