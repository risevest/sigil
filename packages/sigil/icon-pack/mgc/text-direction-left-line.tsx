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
          d="M6.414 16.172a1 1 0 0 1 1.498 1.32l-.084.094-.414.414H18a1 1 0 0 1 .117 1.993L18 20H7.414l.414.414a1 1 0 0 1-1.32 1.498l-.094-.084-2.121-2.12A.98.98 0 0 1 4 19c0-.226.07-.433.205-.607l.088-.1zM17 2a1 1 0 1 1 0 2h-1v11a1 1 0 1 1-2 0V4h-1v11a1 1 0 1 1-2 0v-3h-1a5 5 0 0 1 0-10zm-6 2h-1a3 3 0 0 0-.176 5.995L10 10h1z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'TextDirectionLeftLine'
/**
 * MingCute Icon: Text Direction Left Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TextDirectionLeftLine = Icon
