import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MoneroLine = /* @__PURE__ */ memo(function MoneroLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 4a8 8 0 0 0-7.748 10H7V8a1 1 0 0 1 1.852-.524L12 12.592l3.148-5.116A1 1 0 0 1 17 8v6h2.748A8 8 0 0 0 12 4m6.93 12H16a1 1 0 0 1-1-1v-3.467l-2.148 3.491a1 1 0 0 1-1.704 0L9 11.533V15a1 1 0 0 1-1 1H5.07A8 8 0 0 0 12 20a8 8 0 0 0 6.93-4M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Monero Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { MoneroLine }
