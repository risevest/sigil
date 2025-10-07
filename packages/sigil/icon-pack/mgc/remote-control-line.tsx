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
          d="M16 2a3 3 0 0 1 2.995 2.824L19 5v14a3 3 0 0 1-2.824 2.995L16 22H8a3 3 0 0 1-2.995-2.824L5 19V5a3 3 0 0 1 2.824-2.995L8 2zm0 2H8a1 1 0 0 0-.993.883L7 5v14a1 1 0 0 0 .883.993L8 20h8a1 1 0 0 0 .993-.883L17 19V5a1 1 0 0 0-1-1m-2 12a1 1 0 0 1 .117 1.993L14 18h-.5a1 1 0 0 1-.117-1.993L13.5 16zm-3.5 0a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zm3.5-3a1 1 0 0 1 .117 1.993L14 15h-.5a1 1 0 0 1-.117-1.993L13.5 13zm-3.5 0a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM12 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'RemoteControlLine'
/**
 * MingCute Icon: Remote Control Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RemoteControlLine = Icon
