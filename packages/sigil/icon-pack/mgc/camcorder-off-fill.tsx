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
          d="M1.515 2.515a1 1 0 0 1 1.32-.084l.094.084L4.414 4H16a2 2 0 0 1 1.995 1.85L18 6v2.21l2.094-1.29a1.25 1.25 0 0 1 1.9.943l.006.12v8.034a1.25 1.25 0 0 1-1.8 1.122l-.106-.058L18 15.79v1.794l1.485 1.486a1 1 0 0 1-1.32 1.497l-.094-.083L1.515 3.93a1 1 0 0 1 0-1.414M2 7.247 14.754 20H4a2 2 0 0 1-2-2z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'CamcorderOffFill'
/**
 * MingCute Icon: Camcorder Off Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CamcorderOffFill = Icon
