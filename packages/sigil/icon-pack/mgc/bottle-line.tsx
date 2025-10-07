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
          d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1c0 .378-.105.732-.288 1.034L18.4 7.3a4 4 0 0 1 1.6 3.2V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-7.5a4 4 0 0 1 1.6-3.2l1.688-1.266A2 2 0 0 1 7 5zm2.667 3a1 1 0 0 0-.6.2L6.8 8.9a2 2 0 0 0-.8 1.6v.5h12v-.5a2 2 0 0 0-.8-1.6l-2.267-1.7a1 1 0 0 0-.6-.2zM18 13H6v2h12zm0 4H6v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM15 5V4H9v1z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'BottleLine'
/**
 * MingCute Icon: Bottle Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BottleLine = Icon
