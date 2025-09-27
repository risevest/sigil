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
          d="M12 7.5A8.5 8.5 0 0 0 3.5 16v1a1.5 1.5 0 0 1-3 0v-1C.5 9.649 5.649 4.5 12 4.5S23.5 9.649 23.5 16v1a1.5 1.5 0 0 1-3 0v-1A8.5 8.5 0 0 0 12 7.5m0 4A4.5 4.5 0 0 0 7.5 16v1a1.5 1.5 0 0 1-3 0v-1a7.5 7.5 0 0 1 15 0v1a1.5 1.5 0 0 1-3 0v-1a4.5 4.5 0 0 0-4.5-4.5m-.5 4.5a.5.5 0 0 1 1 0v1a1.5 1.5 0 0 0 3 0v-1a3.5 3.5 0 1 0-7 0v1a1.5 1.5 0 0 0 3 0z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'RainbowFill'
/**
 * MingCute Icon: Rainbow Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RainbowFill = Icon
