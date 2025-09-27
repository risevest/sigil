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
          d="M20.67 2.658a1.5 1.5 0 0 1 .672 2.013l-.001.001c-.263.525-2.312 4.623-5.333 8.61-1.51 1.992-3.305 4.011-5.285 5.545C8.756 20.35 6.468 21.5 4 21.5a1.5 1.5 0 0 1 0-3c1.532 0 3.181-.725 4.886-2.045 1.692-1.31 3.304-3.104 4.731-4.986 2.851-3.761 4.802-7.66 5.041-8.14a1.5 1.5 0 0 1 2.013-.67"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'EaseInFill'
/**
 * MingCute Icon: Ease In Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EaseInFill = Icon
