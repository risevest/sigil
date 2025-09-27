import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13 4a1 1 0 1 0-2 0v17a1 1 0 1 0 2 0zM7 4h3v2H7v1h3v2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m11 3h-4v2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v2h4zm-8 3H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5v-2H5v-1h5zm4 0v2h2v1h-2v2h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm-4 6H8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2v-2H8v-1h2zm4 0v2h5v1h-5v2h5a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'TimelineLine'
/**
 * MingCute Icon: Timeline Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TimelineLine = Icon
