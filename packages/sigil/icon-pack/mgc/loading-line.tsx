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
          d="M10.886 2.061a1 1 0 0 1 .22 1.988A8.001 8.001 0 0 0 12 19.999v2c-5.523 0-10-4.476-10-10 0-5.106 3.848-9.378 8.886-9.937Z"
        />
        <Path
          fill={color}
          d="M16.322 4.04a1 1 0 0 1 1.392-.248A9.99 9.99 0 0 1 22 12c0 5.523-4.477 10-10 10v-2a8 8 0 0 0 4.57-14.567 1 1 0 0 1-.248-1.393"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'LoadingLine'
/**
 * MingCute Icon: Loading Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LoadingLine = Icon
