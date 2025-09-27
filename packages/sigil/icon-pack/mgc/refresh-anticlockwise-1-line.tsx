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
          d="M14.07 19.727a8 8 0 0 1-9.146-3.99 1 1 0 0 0-1.77.933c2.13 4.04 6.836 6.221 11.434 4.99 5.335-1.43 8.5-6.914 7.071-12.248-1.43-5.335-6.913-8.5-12.247-7.071a10 10 0 0 0-7.414 9.58c-.007.903.995 1.402 1.713.919l2.673-1.801c1.008-.68.332-2.251-.854-1.986l-1.058.236a8 8 0 1 1 9.598 10.439Z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'RefreshAnticlockwise1Line'
/**
 * MingCute Icon: Refresh Anticlockwise 1 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RefreshAnticlockwise1Line = Icon
