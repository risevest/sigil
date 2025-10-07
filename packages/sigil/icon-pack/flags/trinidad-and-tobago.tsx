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
          d="M10.83 2.22a20 20 0 0 0-4.973 3.637 20 20 0 0 0-3.636 4.972l12.86 14.09 14.09 12.86a20 20 0 0 0 4.972-3.636 20 20 0 0 0 3.636-4.972l-12.86-14.09z"
        />
        <Path
          fill="#000"
          d="M34.143 34.143a20 20 0 0 0 2.246-2.674L8.53 3.611a20.1 20.1 0 0 0-4.92 4.92L31.47 36.387a20 20 0 0 0 2.673-2.245"
        />
        <Path
          fill="#D80027"
          d="M5.857 34.143c6.31 6.31 15.786 7.52 23.314 3.636L2.22 10.829c-3.885 7.527-2.673 17.004 3.636 23.313M34.143 5.857c-6.31-6.31-15.786-7.521-23.313-3.636l26.95 26.95c3.884-7.528 2.673-17.004-3.637-23.314"
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
Icon.displayName = 'TrinidadAndTobago'
/**
 * Flags by `Deji.Zeal`: Trinidad And Tobago
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const TrinidadAndTobago = Icon
