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
          d="M40 20c0-2.446-.44-4.79-1.244-6.956L20 12.174l-18.756.87A20 20 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956l18.756.87 18.756-.87A20 20 0 0 0 40 20"
        />
        <Path
          fill="#6DA544"
          d="M20 40c8.6 0 15.93-5.428 18.756-13.044H1.244C4.07 34.572 11.401 40 20 40"
        />
        <Path
          fill="#338AF3"
          d="M1.244 13.044h37.512C35.93 5.428 28.6 0 20 0S4.07 5.428 1.244 13.044"
        />
        <Path
          fill="#F0F0F0"
          d="M20.435 25.652a5.652 5.652 0 1 1 2.689-10.625 6.956 6.956 0 1 0 0 9.946c-.8.433-1.716.68-2.689.68"
        />
        <Path
          fill="#F0F0F0"
          d="m24.783 16.087.749 2.106 2.018-.96-.96 2.018 2.106.75-2.105.748.96 2.018-2.02-.96-.748 2.106-.748-2.105-2.019.96.96-2.02L20.87 20l2.106-.749-.96-2.018 2.019.96z"
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
Icon.displayName = 'Azerbaijan'
/**
 * Flags by `Deji.Zeal`: Azerbaijan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Azerbaijan = Icon
