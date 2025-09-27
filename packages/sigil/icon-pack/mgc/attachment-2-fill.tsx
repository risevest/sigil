import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M5.99 10.232a3 3 0 0 1 4.242-4.242l7.779 7.778a3 3 0 1 1-4.243 4.242l-3.359-3.358a.75.75 0 0 1 1.06-1.061l3.006 3.005a1.5 1.5 0 1 0 2.121-2.121l-3.005-3.005a3.75 3.75 0 1 0-5.303 5.303l3.358 3.359a6 6 0 0 0 8.486-8.486l-7.778-7.778a6 6 0 0 0-8.834 8.106L3.515 12l.353.354a1.5 1.5 0 0 0 2.122-2.122"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Attachment2Fill'
/**
 * MingCute Icon: Attachment 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Attachment2Fill = Icon
