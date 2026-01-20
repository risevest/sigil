import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ClapperboardLine = /* @__PURE__ */ memo(function ClapperboardLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m5.998 7 2.31-4h3.69l-2.31 4zm6 0 2.31-4h3.69l-2.31 4zm6 0 2.31-4h.7c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h3.006L4 6.46V19h16V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Clapperboard Line
 * @see {@link https://remixicon.com/icon/clapperboard-line Remix Icon Docs}
 */
export { ClapperboardLine }
