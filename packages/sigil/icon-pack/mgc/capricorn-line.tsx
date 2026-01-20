import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CapricornLine = /* @__PURE__ */ memo(function CapricornLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M3 4a1 1 0 0 1 1-1h1a2.99 2.99 0 0 1 2.288 1.06A4 4 0 0 1 14 7v6.918A4.7 4.7 0 0 1 17.785 12 3.215 3.215 0 0 1 21 15.215v.285a3.5 3.5 0 0 1-3.5 3.5H17a5 5 0 0 1-2.492-.665A4 4 0 0 1 10.738 21H10a1 1 0 1 1 0-2h.737a2 2 0 0 0 1.923-1.45l.21-.732A5 5 0 0 1 12 14V7a2 2 0 1 0-4 0v8a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1m12.093 12.316A3 3 0 0 0 17 17h.5a1.5 1.5 0 0 0 1.5-1.5v-.285c0-.671-.544-1.215-1.215-1.215a2.69 2.69 0 0 0-2.588 1.952z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Capricorn Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { CapricornLine }
