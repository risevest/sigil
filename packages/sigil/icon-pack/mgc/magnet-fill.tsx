import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MagnetFill = /* @__PURE__ */ memo(function MagnetFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M19.556 4.343a8 8 0 0 1 0 11.314L13.9 21.314a2 2 0 0 1-2.828 0L8.95 19.192a2 2 0 0 1 0-2.828l5.657-5.657a1 1 0 0 0-1.415-1.414L7.536 14.95a2 2 0 0 1-2.829 0l-2.121-2.122a2 2 0 0 1 0-2.828l5.657-5.657a8 8 0 0 1 11.313 0m-6.364 12.021a1 1 0 0 0-1.497 1.32l.083.094.707.707a1 1 0 0 0 1.498-1.32l-.084-.094zM5.414 10a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.415-1.414L6.828 10a1 1 0 0 0-1.414 0"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Magnet Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { MagnetFill }
