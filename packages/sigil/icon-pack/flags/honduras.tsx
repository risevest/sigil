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
          fill="#338AF3"
          d="M20 40c7.929 0 14.78-4.614 18.015-11.304H1.985C5.218 35.386 12.07 40 20 40M20 0C12.07 0 5.22 4.614 1.984 11.304h36.031C34.78 4.614 27.93 0 20 0M12.308 13.043l.648 1.993h2.095l-1.695 1.232.648 1.993-1.696-1.232-1.695 1.232.648-1.993-1.696-1.232h2.096zM12.308 21.739l.648 1.993h2.095l-1.695 1.231.648 1.993-1.696-1.232-1.695 1.232.648-1.993-1.696-1.231h2.096zM27.691 13.043l.648 1.993h2.095l-1.695 1.232.648 1.993-1.696-1.232-1.695 1.232.648-1.993-1.696-1.232h2.096zM27.691 21.739l.648 1.993h2.095l-1.695 1.231.648 1.993-1.696-1.232-1.695 1.232.648-1.993-1.696-1.231h2.096zM20 17.391l.647 1.993h2.096l-1.695 1.232.647 1.992L20 21.377l-1.695 1.232.647-1.993-1.695-1.232h2.095z"
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
Icon.displayName = 'Honduras'
/**
 * Flags by `Deji.Zeal`: Honduras
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Honduras = Icon
