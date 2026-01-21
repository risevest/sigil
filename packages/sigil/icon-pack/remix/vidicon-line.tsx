import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VidiconLine = /* @__PURE__ */ memo(function VidiconLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17 9.2 5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 3.159 4 2.8V8.84l-4 2.8zM3 6v12h12V6zm2 2h2v2H5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Vidicon Line
 * @see {@link https://remixicon.com/icon/vidicon-line Remix Icon Docs}
 */
export { VidiconLine }
