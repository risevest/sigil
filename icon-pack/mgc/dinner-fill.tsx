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
          d="M19.707 2.293a1 1 0 0 1 0 1.414L15.414 8h4.524a1 1 0 0 1 .992.876 9.002 9.002 0 0 1-5.336 9.377l.376 1.505A1 1 0 0 1 15 21H9a1 1 0 0 1-.97-1.242l.376-1.505A9.002 9.002 0 0 1 3.07 8.876 1 1 0 0 1 4.062 8h3.524l5.707-5.707a1 1 0 1 1 1.414 1.414L10.414 8h2.172l5.707-5.707a1 1 0 0 1 1.414 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DinnerFill'

/**
 * MingCute Icon: Dinner Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DinnerFill = memo(Icon)
