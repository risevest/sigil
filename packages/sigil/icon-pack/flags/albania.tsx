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
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#000"
          d="M31.304 14.844H24.06A2.609 2.609 0 1 0 20 11.601a2.609 2.609 0 1 0-4.06 3.243H8.695c0 1.921 1.673 3.479 3.594 3.479h-.116a3.48 3.48 0 0 0 3.479 3.478c0 .622.164 1.206.45 1.71l-2.885 2.886 2.214 2.213 3.14-3.14q.184.069.381.106l-1.897 4.284L20 33.044l2.945-3.184-1.898-4.284q.198-.037.382-.106l3.14 3.14 2.213-2.213-2.885-2.886c.286-.505.45-1.088.45-1.71a3.48 3.48 0 0 0 3.479-3.479h-.116c1.92 0 3.594-1.557 3.594-3.478"
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
Icon.displayName = 'Albania'
/**
 * Flags by `Deji.Zeal`: Albania
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Albania = Icon
