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
          d="M11.2 1.401a1 1 0 0 1 1.6 0L15.5 5h4.645a1.5 1.5 0 0 1 1.308 2.235L13.09 22.103a1.25 1.25 0 0 1-2.18 0L2.549 7.235A1.5 1.5 0 0 1 3.855 5H8.5zm.797 2.266L9.33 7.222l2.667 4.445 2.666-4.445z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Vip4Fill'
/**
 * MingCute Icon: Vip 4 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Vip4Fill = Icon
