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
          d="M13.5 3a1.5 1.5 0 0 0-3 0v1.837a3.5 3.5 0 0 0-1.035 5.576L5.6 20.462a1.5 1.5 0 0 0 2.8 1.076l1.269-3.298a10.5 10.5 0 0 0 4.663 0l1.268 3.3a1.5 1.5 0 0 0 2.8-1.078l-1.269-3.298A10.5 10.5 0 0 0 19.826 15a1.5 1.5 0 0 0-2.235-2 7.5 7.5 0 0 1-1.553 1.321l-1.503-3.908A3.5 3.5 0 0 0 13.5 4.837zm-.262 12.398L12 12.178l-1.239 3.22a7.6 7.6 0 0 0 2.477 0"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Compass2Fill'
/**
 * MingCute Icon: Compass 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Compass2Fill = Icon
