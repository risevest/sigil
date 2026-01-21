import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Tv2Line = /* @__PURE__ */ memo(function Tv2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 18zm2 1v12h16V5zm1 15h14v2H5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Tv 2 Line
 * @see {@link https://remixicon.com/icon/tv-2-line Remix Icon Docs}
 */
export { Tv2Line }
