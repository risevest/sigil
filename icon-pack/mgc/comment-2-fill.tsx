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
          d="M16.5 11a5.5 5.5 0 0 1 4.821 8.148l.386 1.311a1.005 1.005 0 0 1-1.248 1.248l-1.31-.386A5.5 5.5 0 1 1 16.5 11M11 3a9.004 9.004 0 0 1 8.708 6.719 7.5 7.5 0 0 0-9.22 11.267 8.953 8.953 0 0 1-4.097-1.255l-2.65.78a1.008 1.008 0 0 1-1.252-1.252l.78-2.65A9 9 0 0 1 11 3"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Comment2Fill'

/**
 * MingCute Icon: Comment 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Comment2Fill = memo(Icon)
