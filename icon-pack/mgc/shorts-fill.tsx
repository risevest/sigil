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
          d="M5.847 5a2 2 0 0 0-1.973 1.671l-.057.346C3.877 7.006 3.937 7 4 7h16c.063 0 .124.006.183.017l-.057-.346A2 2 0 0 0 18.153 5zm14.645 3.87A.995.995 0 0 1 20 9H4a.995.995 0 0 1-.492-.13l-1.3 7.801A2 2 0 0 0 4.18 19h5.285a2 2 0 0 0 1.664-.89L12 15.802l.871 2.306a2 2 0 0 0 1.664.891h5.285a2 2 0 0 0 1.972-2.329z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ShortsFill'

/**
 * MingCute Icon: Shorts Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ShortsFill = memo(Icon)
