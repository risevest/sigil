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
          d="M11 3v16H8.618l-.724 1.447a1 1 0 0 1-1.835-.787l.047-.107.276-.553H5a2 2 0 0 1-1.995-1.85L3 17V5a2 2 0 0 1 1.85-1.995L5 3zm8 0a2 2 0 0 1 1.995 1.85L21 5v12a2 2 0 0 1-1.85 1.995L19 19h-1.382l.276.553a1 1 0 0 1-1.73.996l-.058-.102L15.382 19H13V3zM8 9a1 1 0 0 0-.993.883L7 10v2a1 1 0 0 0 1.993.117L9 12v-2a1 1 0 0 0-1-1m8 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'BedsideTable2Fill'
/**
 * MingCute Icon: Bedside Table 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BedsideTable2Fill = Icon
