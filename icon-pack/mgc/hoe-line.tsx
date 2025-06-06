import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M5.636 5.636A5 5 0 0 0 4.222 9.88l.424 2.97a1 1 0 0 0 1.697.566l2.829-2.829 7.777 7.778a1 1 0 0 0 1.415-1.414l-7.778-7.778 2.828-2.829a1 1 0 0 0-.566-1.697l-2.97-.424a5 5 0 0 0-4.242 1.414Zm2.85 2.808 2.1-2.1-.99-.142a3 3 0 0 0-3.394 3.394l.141.99 2.1-2.1a.998.998 0 0 1 .042-.042Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HoeLine'

/**
 * MingCute Icon: Hoe Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HoeLine = memo(Icon)
