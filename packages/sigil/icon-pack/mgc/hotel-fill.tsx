import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HotelFill = /* @__PURE__ */ memo(function HotelFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M17 3a2 2 0 0 1 2 2v1h1a1 1 0 1 1 0 2v11a1 1 0 1 1 0 2h-6.5v-4.5a1.5 1.5 0 0 0-3 0V21H4a1 1 0 1 1 0-2V8a1 1 0 0 1 0-2h1V5a2 2 0 0 1 2-2zM8 13a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m8 0a1 1 0 0 0-.993.883L15 14v1a1 1 0 0 0 1.993.117L17 15v-1a1 1 0 0 0-1-1M8 9a1 1 0 0 0-.993.883L7 10v1a1 1 0 0 0 1.993.117L9 11v-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-.993.883L11 10v1a1 1 0 0 0 1.993.117L13 11v-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m1-4H7v1h10z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Hotel Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { HotelFill }
