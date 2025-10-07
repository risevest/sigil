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
          d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm1.79 14.853a1 1 0 0 0 1.754.961 12 12 0 0 0 1.418-4.828h2.076a12 12 0 0 0 1.418 4.828 1 1 0 1 0 1.754-.961 10 10 0 0 1-1.165-3.868h.97a1 1 0 0 0 0-2h-.967a10 10 0 0 1 1.162-3.838 1 1 0 1 0-1.754-.961 12 12 0 0 0-1.415 4.8H10.96a12 12 0 0 0-1.416-4.8 1 1 0 1 0-1.754.961 10 10 0 0 1 1.162 3.839h-.937a1 1 0 1 0 0 2h.94a10 10 0 0 1-1.165 3.867"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'PiscesFill'
/**
 * MingCute Icon: Pisces Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PiscesFill = Icon
