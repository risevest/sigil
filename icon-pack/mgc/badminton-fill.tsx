import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M6.517 2a2.774 2.774 0 0 0-2.612 3.707L7.224 15h9.552l3.32-9.293a2.774 2.774 0 0 0-4.434-3.025A2.803 2.803 0 0 0 13.822 2c-.695 0-1.33.25-1.822.667A2.81 2.81 0 0 0 10.18 2c-.71 0-1.35.26-1.84.682A2.769 2.769 0 0 0 6.517 2m9.545 15H7.938l.062.173V18a4 4 0 0 0 8 0v-.827z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BadmintonFill'

/**
 * MingCute Icon: Badminton Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BadmintonFill = memo(Icon)
