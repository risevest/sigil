import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TvLine = /* @__PURE__ */ memo(function TvLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464 7.464 1.05 11.414 5h1.172l3.95-3.95 1.414 1.414zM4 7v12h16V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Tv Line
 * @see {@link https://remixicon.com/icon/tv-line Remix Icon Docs}
 */
export { TvLine }
