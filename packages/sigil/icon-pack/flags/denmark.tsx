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
          d="M15.652 17.391h24.179C38.552 7.578 30.16 0 20 0a20 20 0 0 0-4.349.475zM10.434 17.391V2.431C4.943 5.429 1.011 10.925.17 17.392zM10.434 22.609H.17c.842 6.467 4.774 11.963 10.265 14.96zM15.652 22.609v16.916c1.4.31 2.855.475 4.348.475 10.162 0 18.553-7.578 19.83-17.391z"
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
Icon.displayName = 'Denmark'
/**
 * Flags by `Deji.Zeal`: Denmark
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Denmark = Icon
