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
          d="M12.864 1.497a1 1 0 0 0-1.728 0L9.095 5l-3.965.86a1 1 0 0 0-.534 1.643l2.702 3.024-.408 4.035a1 1 0 0 0 1.398 1.016l1.042-.459-1.305 5.656A1 1 0 0 0 9 22h6a1 1 0 0 0 .974-1.225L14.67 15.12l1.042.46a1 1 0 0 0 1.398-1.017l-.408-4.035 2.702-3.024a1 1 0 0 0-.534-1.643L14.905 5zm-1.248 12.615.384-.17.384.17L13.743 20h-3.486z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'StarTopperFill'
/**
 * MingCute Icon: Star Topper Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const StarTopperFill = Icon
