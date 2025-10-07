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
          d="M8.085 1.689a1 1 0 0 1 .31 1.258L7.867 4H18a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5a1 1 0 1 1 2 0v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5.024c-.9 0-1.35-1.088-.714-1.724l2.483-2.483a1 1 0 0 1 1.292-.104m1.387 5.93A1 1 0 0 1 10 8.5v7a1 1 0 1 1-2 0v-5.134a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05M11 10.5a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'RewindBackwardSquare10Line'
/**
 * MingCute Icon: Rewind Backward Square 10 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RewindBackwardSquare10Line = Icon
