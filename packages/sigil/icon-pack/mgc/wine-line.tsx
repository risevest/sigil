import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const WineLine = /* @__PURE__ */ memo(function WineLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M11.42 2a2 2 0 0 0-1.993 1.834l-.383 4.602-1.708 1.138A3 3 0 0 0 6 12.07V19a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6.93a3 3 0 0 0-1.336-2.496l-1.708-1.138-.383-4.602A2 2 0 0 0 12.58 2zM16 14h-4a1 1 0 1 0 0 2h4v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-6.93a1 1 0 0 1 .445-.832l1.708-1.138a2 2 0 0 0 .884-1.498L11.42 4h1.16l.383 4.602a2 2 0 0 0 .884 1.498l1.708 1.138a1 1 0 0 1 .445.832z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Wine Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { WineLine }
