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
          d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20c0-.87-2.608-20-2.608-20z"
        />
        <Path fill="#496E2D" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0" />
        <Path
          fill="#D80027"
          d="m24.298 16.164-1.641 2.261-2.658-.862 1.644 2.26-1.641 2.26 2.656-.864 1.644 2.26-.002-2.795 2.657-.865-2.658-.861z"
        />
        <Path
          fill="#D80027"
          d="M21.66 25.652a5.652 5.652 0 1 1 2.688-10.625 6.956 6.956 0 1 0 0 9.946c-.8.433-1.715.68-2.688.68"
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
Icon.displayName = 'Algeria'
/**
 * Flags by `Deji.Zeal`: Algeria
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Algeria = Icon
