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
          d="M4 4a1 1 0 0 1 .993.883L5 5v13h15a1 1 0 0 1 .117 1.993L20 20H4a1 1 0 0 1-.993-.883L3 19V5a1 1 0 0 1 1-1m16.194 2.818c.9 0 1.35 1.088.714 1.724l-5.57 5.57a1.1 1.1 0 0 1-1.555 0l-2.758-2.758-3.535 3.535a1 1 0 0 1-1.415-1.414l4.172-4.172a1.1 1.1 0 0 1 1.556 0l2.758 2.758 3.242-3.243h-.414a1 1 0 1 1 0-2z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'ChartLineLine'
/**
 * MingCute Icon: Chart Line Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChartLineLine = Icon
