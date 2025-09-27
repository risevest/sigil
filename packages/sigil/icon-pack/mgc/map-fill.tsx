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
          d="M9 5.054c-.065 1.642 0 11.973 0 11.973q.242 0 .474.077L15 18.946V6.973a1.5 1.5 0 0 1-.474-.077zm-.474-1.95a1.5 1.5 0 0 1 .948 0L15 4.946l5.289-1.763A1.3 1.3 0 0 1 22 4.416V17.64a1.5 1.5 0 0 1-1.026 1.423l-5.5 1.833c-.308.103-.64.103-.948 0L9 19.054l-5.289 1.763A1.3 1.3 0 0 1 2 19.584V6.36a1.5 1.5 0 0 1 1.026-1.423z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'MapFill'
/**
 * MingCute Icon: Map Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MapFill = Icon
