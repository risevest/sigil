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
          d="M12 3a1 1 0 0 1 1 1v6.624l6.3-2.047a1 1 0 1 1 .617 1.902l-6.3 2.047 4.482 6.167a1 1 0 1 1-1.618 1.176L12 13.7l-4.481 6.17A1 1 0 0 1 5.9 18.694l4.48-6.168-6.299-2.047A1 1 0 1 1 4.7 8.577l6.3 2.047V4a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Asterisk2Line'

/**
 * MingCute Icon: Asterisk 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Asterisk2Line = memo(Icon)
