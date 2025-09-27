import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#338AF3"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#F0F0F0"
          d="m20.001 8.696.863 2.657h2.794l-2.26 1.642.863 2.657-2.26-1.642-2.26 1.642.863-2.657-2.26-1.642h2.794zM8.696 20l2.658-.863v-2.794l1.642 2.26 2.657-.863L14.01 20l1.642 2.26-2.657-.863-1.642 2.26v-2.794zM20.001 31.304l-.863-2.657h-2.794l2.26-1.642-.863-2.657L20 25.99l2.26-1.642-.863 2.657 2.26 1.642h-2.794zM31.305 20l-2.657.863v2.794l-1.642-2.26-2.657.863L25.99 20l-1.642-2.26 2.657.863 1.642-2.26v2.794z"
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
Icon.displayName = 'Micronesia'
/**
 * Flags by `Deji.Zeal`: Micronesia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Micronesia = Icon
