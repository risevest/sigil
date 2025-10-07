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
          d="M17.054 4.396a3 3 0 0 1 3.624 1.952l.05.169 1.035 3.864a2 2 0 0 1-1.27 2.405l-.144.044-2.35.63V15a1 1 0 0 0 .884.993L19 16h1a1 1 0 0 1 1.993-.117L22 16v2a1 1 0 0 1-1.993.117L20 18h-1a3 3 0 0 1-2.995-2.824L16 15v-1.004L9.487 15.74a2 2 0 0 1-2.142-.765l-.091-.139L4.239 9.81a1.5 1.5 0 0 1 .77-2.18l.128-.04 11.917-3.193Zm-12.852 6.27 1.625 2.75a1 1 0 0 1-1.721 1.018l-1.625-2.75a1 1 0 0 1 1.721-1.017Z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Camcorder2Fill'
/**
 * MingCute Icon: Camcorder 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Camcorder2Fill = Icon
