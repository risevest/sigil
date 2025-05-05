import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill={color} fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M9 2a2 2 0 0 0-2 2v1c0 .378.105.732.288 1.034L5.6 7.3A4 4 0 0 0 4 10.5V18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-7.5a4 4 0 0 0-1.6-3.2l-1.688-1.266A1.99 1.99 0 0 0 17 5V4a2 2 0 0 0-2-2zm6 3V4H9v1zm3 8H6v-2h12zM6 15h12v2H6z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BottleFill'

/**
 * MingCute Icon: Bottle_fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BottleFill = memo(Icon)
