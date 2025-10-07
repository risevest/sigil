import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          fillRule="nonzero"
          d="M13.614 4a3 3 0 0 1 2.809 1.947l2.294 6.117a4.001 4.001 0 1 1-2.072.171L16.182 11 9.21 13.614a4 4 0 1 1-3.41-1.61L6.022 12l-1.111-2H4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-.8l1.026 1.847 7.254-2.72-.93-2.478A1 1 0 0 0 13.614 6H11a1 1 0 1 1 0-2zm4.553 10.007L17.981 14a2 2 0 1 0 .186.007M6 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'BikeLine'
/**
 * MingCute Icon: Bike Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BikeLine = Icon
