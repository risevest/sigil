import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8 13h8a1 1 0 1 1 0 2h-.153l-.86 5.164a1 1 0 0 1-1.694.543L13 20.414l-.293.293a1 1 0 0 1-1.414 0L11 20.414l-.293.293a1 1 0 0 1-1.693-.543L8.153 15H8a1 1 0 1 1 0-2m5.82 2h-3.64l.509 3.05a1 1 0 0 1 1.018.243l.293.293.293-.293a1 1 0 0 1 1.018-.244zM20 4a2 2 0 0 1 1.995 1.85L22 6v10a2 2 0 0 1-1.85 1.995L20 18h-2a1 1 0 0 1-.117-1.993L18 16h2V6H4v10h2a1 1 0 0 1 .117 1.993L6 18H4a2 2 0 0 1-1.995-1.85L2 16V6a2 2 0 0 1 1.85-1.995L4 4zm-5 4a1 1 0 0 1 .993.883L16 9v2a1 1 0 0 1-1.993.117L14 11v-1h-4v1a1 1 0 0 1-1.993.117L8 11V9a1 1 0 0 1 .883-.993L9 8z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'BackboardLine'
/**
 * MingCute Icon: Backboard Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BackboardLine = Icon
