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
          d="M14 3a2 2 0 0 1 1.995 1.85L16 5v1.055l3.641.976a2 2 0 0 1 1.448 2.304l-.034.145-2.588 9.66a2 2 0 0 1-2.304 1.447l-.145-.033-.587-.157c-.322.33-.759.55-1.246.595L14 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 2H5v14h9zm2 3.126v10.353l.535.143 2.589-9.66L16 8.127Z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'BoardLine'
/**
 * MingCute Icon: Board Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BoardLine = Icon
