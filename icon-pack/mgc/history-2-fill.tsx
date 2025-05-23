import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M6.57 5.563a1.2 1.2 0 0 0 0 1.874l4.48 3.584c.786.628 1.95.07 1.95-.937V7.083a6.007 6.007 0 0 1 4.811 4.417H17a1.5 1.5 0 0 0 0 3h.811a6.01 6.01 0 0 1-4.311 4.311V18a1.5 1.5 0 0 0-3 0v.811A6.01 6.01 0 0 1 6.189 14.5H7a1.5 1.5 0 0 0 0-3h-.811c.008-.034.017-.067.027-.1a1.5 1.5 0 0 0-2.892-.8A9 9 0 1 0 13 4.055V2.917c0-1.006-1.164-1.565-1.95-.937z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'History2Fill'

/**
 * MingCute Icon: History 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const History2Fill = memo(Icon)
