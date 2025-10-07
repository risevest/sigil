import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12.267 3.452c-.23-.187-.5-.325-.798-.397a2 2 0 0 0-.89-.055h-5.58a2 2 0 0 0-2 2v10.903a5 5 0 0 0 .671 2.6 4.97 4.97 0 0 0 1.82 1.822 4.97 4.97 0 0 0 2.5.676 4.97 4.97 0 0 0 2.591-.718l9.445-5.453a2 2 0 0 0 .732-2.732l-2.79-4.831a2 2 0 0 0-.87-1.025zM13 13.34V6.185l3.098 1.789zm6.026-.242-5.366 3.098L17.238 10zM9.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Palette3Fill'
/**
 * MingCute Icon: Palette 3 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Palette3Fill = Icon
