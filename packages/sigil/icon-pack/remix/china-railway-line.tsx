import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChinaRailwayLine = /* @__PURE__ */ memo(function ChinaRailwayLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 20v-7H9v-3h6v3h-2v7h5v2H6v-2zM10 2.223V1h4v1.223a9.003 9.003 0 0 1 2.993 16.266l-1.11-1.664a7 7 0 1 0-7.767 0l-1.109 1.664A9.003 9.003 0 0 1 10 2.223" />
    </Svg>
  )
})
/**
 * Remix Icon: China Railway Line
 * @see {@link https://remixicon.com/icon/china-railway-line Remix Icon Docs}
 */
export { ChinaRailwayLine }
