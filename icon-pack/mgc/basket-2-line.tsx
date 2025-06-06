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
          d="M15.894 3.553 17.618 7H20a2 2 0 0 1 2 2v1a2 2 0 0 1-1.157 1.814l-1.519 6.837A3 3 0 0 1 16.396 21H7.604a3 3 0 0 1-2.928-2.35l-1.52-6.836A2 2 0 0 1 2 10V9a2 2 0 0 1 2-2h2.382l1.724-3.447a1 1 0 0 1 1.788.894L8.618 7h6.764l-1.276-2.553a1 1 0 1 1 1.788-.894M18.754 12H5.246l1.381 6.217a1 1 0 0 0 .976.783h8.792a1 1 0 0 0 .976-.783zM20 9H4v1h16z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Basket2Line'

/**
 * MingCute Icon: Basket 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Basket2Line = memo(Icon)
