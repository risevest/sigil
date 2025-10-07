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
          d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5 0 2.904-1.18 5.535-3.085 7.434a1.51 1.51 0 0 1-2.153-.02l-.842-.873a1.5 1.5 0 0 1 1.804-2.355 7.5 7.5 0 1 0-12.449 0 1.5 1.5 0 0 1 1.805 2.355l-.842.873a1.51 1.51 0 0 1-2.153.02A10.47 10.47 0 0 1 1.5 12C1.5 6.201 6.201 1.5 12 1.5m0 4A1.5 1.5 0 0 1 13.5 7v4.401A2.999 2.999 0 0 1 12 17a3 3 0 0 1-1.5-5.599V7A1.5 1.5 0 0 1 12 5.5"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Dashboard2Fill'
/**
 * MingCute Icon: Dashboard 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Dashboard2Fill = Icon
