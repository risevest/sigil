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
          d="M15.847 3c.172 0 .344.003.508.065a2 2 0 0 1 1.472 2.218l-.158 1.104 1.059.264A3 3 0 0 1 21 9.561V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9.562a3 3 0 0 1 2.272-2.91l1.059-.265-.158-1.104a2 2 0 0 1 1.472-2.218C7.81 3.003 7.981 3 8.153 3zM12 7.4 13.92 5h-3.84zm3.71-1.436L13.553 8.66l1.652 1.826.503-4.52Zm-7.42 0 .504 4.521 1.652-1.826-2.155-2.695ZM16 14a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'ShirtFill'
/**
 * MingCute Icon: Shirt Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ShirtFill = Icon
