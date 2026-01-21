import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HistoryAnticlockwiseLine = /* @__PURE__ */ memo(function HistoryAnticlockwiseLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20.66 7c2.762 4.783 1.123 10.9-3.66 13.66-4.123 2.38-9.233 1.491-12.335-1.86a1 1 0 0 1 1.468-1.358 8 8 0 1 0-2.06-6.524l1.281-.335c1.047-.273 1.818.97 1.108 1.787L4.21 14.957c-.568.652-1.665.43-1.892-.444A10 10 0 0 1 7 3.34C11.783.579 17.899 2.217 20.66 7M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 1 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: History Anticlockwise Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { HistoryAnticlockwiseLine }
