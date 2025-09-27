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
          d="M6.517 2a2.774 2.774 0 0 0-2.612 3.707L7.224 15h9.552l3.32-9.293a2.774 2.774 0 0 0-4.434-3.025A2.8 2.8 0 0 0 13.822 2c-.695 0-1.33.25-1.822.667A2.8 2.8 0 0 0 10.18 2c-.71 0-1.35.26-1.84.682A2.77 2.77 0 0 0 6.517 2m9.545 15H7.938l.062.173V18a4 4 0 0 0 8 0v-.827z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'BadmintonFill'
/**
 * MingCute Icon: Badminton Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BadmintonFill = Icon
