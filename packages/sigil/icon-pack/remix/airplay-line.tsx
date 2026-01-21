import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AirplayLine = /* @__PURE__ */ memo(function AirplayLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12.4 13.533 5 6.667a.5.5 0 0 1-.4.8H7a.5.5 0 0 1-.4-.8l5-6.667a.5.5 0 0 1 .8 0M12 16.33 10 19h4zM18 19v-2h2V5H4v12h2v2H2.992A.994.994 0 0 1 2 18V4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Airplay Line
 * @see {@link https://remixicon.com/icon/airplay-line Remix Icon Docs}
 */
export { AirplayLine }
