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
          d="M11.2 1.401a1.001 1.001 0 0 1 1.516-.1l.085.1L15.5 5h4.645a1.5 1.5 0 0 1 1.367 2.119l-.06.116-8.363 14.868a1.25 1.25 0 0 1-2.105.115l-.073-.115L2.548 7.235a1.5 1.5 0 0 1 1.177-2.23L3.855 5H8.5zM8.433 7H4.71L12 19.96 19.29 7h-3.724l-2.623 4.371a1.1 1.1 0 0 1-1.886 0zM12 3.667l-1.796 2.395L12 9.056l1.797-2.994z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Vip4Line'

/**
 * MingCute Icon: Vip 4 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Vip4Line = memo(Icon)
