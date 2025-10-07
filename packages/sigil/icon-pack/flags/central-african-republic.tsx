import { memo } from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Rect width={40} height={40} fill="#FFCF00" rx={20} />
        <Path fill="#002C87" d="M-4 0h48v10H-4z" />
        <Path fill="#fff" d="M-4 10h48v10H-4z" />
        <Path fill="#01980C" d="M-4 20h48v10H-4z" />
        <Path fill="#F60631" d="M25-4v48H15V-4z" />
        <Path
          fill="#FFCF00"
          d="m11.804 5.467-1.26.984.546 1.502-1.325-.894-1.26.984.441-1.537-1.324-.894 1.597-.055.441-1.536.546 1.502z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={40} height={40} fill="#fff" rx={20} />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'CentralAfricanRepublic'
/**
 * Flags by `Deji.Zeal`: Central African Republic
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const CentralAfricanRepublic = Icon
