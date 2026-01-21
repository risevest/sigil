import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Playlist2Line = /* @__PURE__ */ memo(function Playlist2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M21 4.64v3.58a2 2 0 0 1-1.515 1.94L17 10.78v6.72a3.5 3.5 0 1 1-2-3.163V6.562a3 3 0 0 1 2.272-2.91l1.864-.467A1.5 1.5 0 0 1 21 4.64M13.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7 17a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm2-6a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm10-5.72-1.242.311a1 1 0 0 0-.752.857L17 6.562v2.157l2-.5zM12 5a1 1 0 0 1 .117 1.993L12 7H4a1 1 0 0 1-.117-1.993L4 5z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Playlist 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Playlist2Line }
