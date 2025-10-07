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
          d="M12 19.5a1 1 0 0 1 .993.883L13 20.5v.5a1 1 0 0 1-1.993.117L11 21v-.5a1 1 0 0 1 1-1M12 2a8 8 0 0 1 7.996 7.75L20 10v11a1 1 0 0 1-1.696.718l-.085-.093L14.52 17h-1.653q.097.166.125.366L13 17.5v.5a1 1 0 0 1-1.993.117L11 18v-.5q.001-.207.077-.385l.057-.115H9.48l-3.7 4.625a1 1 0 0 1-1.773-.5L4 21V10a8 8 0 0 1 8-8m0 2a6 6 0 0 0-5.996 5.775L6 10v8.15l2-2.5V12a4 4 0 0 1 7.995-.2L16 12v3.65l2 2.5V10a6 6 0 0 0-6-6m0 6a2 2 0 0 0-2 2v3h4v-3a2 2 0 0 0-2-2"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'TunnelLine'
/**
 * MingCute Icon: Tunnel Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TunnelLine = Icon
