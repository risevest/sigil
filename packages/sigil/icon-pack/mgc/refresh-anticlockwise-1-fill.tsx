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
          d="M13.3 19.374a7.5 7.5 0 0 1-7.881-3.779 1.5 1.5 0 0 0-2.63 1.443c2.102 3.835 6.48 6.093 11.032 5.29 5.71-1.006 9.524-6.452 8.517-12.163C21.33 4.454 15.885.64 10.174 1.648a10.5 10.5 0 0 0-8.632 9.343C1.418 12.3 2.808 13.15 3.91 12.54l2.82-1.562c1.547-.856.767-3.219-.986-2.986l-.102.014A7.5 7.5 0 1 1 13.3 19.374"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'RefreshAnticlockwise1Fill'
/**
 * MingCute Icon: Refresh Anticlockwise 1 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RefreshAnticlockwise1Fill = Icon
