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
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#6DA544"
          d="M12.175 13.043h26.582C35.93 5.427 28.6 0 20 0A19.93 19.93 0 0 0 5.859 5.858zM12.175 26.956h26.582C35.93 34.572 28.6 40 20 40A19.93 19.93 0 0 1 5.859 34.14z"
        />
        <Path fill="#D80027" d="M5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L20 20z" />
        <Path
          fill="#000"
          d="m25.396 16.522.863 2.657h2.794l-2.26 1.642.863 2.657-2.26-1.642-2.26 1.642.863-2.657-2.26-1.642h2.793zM34.093 16.522l.863 2.657h2.794l-2.26 1.642.863 2.657-2.26-1.642-2.26 1.642.863-2.657-2.26-1.642h2.793z"
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
Icon.displayName = 'SaoTomeAndPrincipe'
/**
 * Flags by `Deji.Zeal`: Sao Tome And Principe
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SaoTomeAndPrincipe = Icon
