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
          d="M8.773 5.605c1.635-.847 3.286-.828 4.347.21.55.537.826 1.24.863 1.992 1.675-.502 3.045-.362 3.937.5.848.82.937 1.967.617 2.964C19.9 11.961 21 13.058 21 14.715c0 1.93-1.256 3.526-2.962 4.586C16.318 20.371 14.004 21 11.5 21c-2.504 0-4.818-.63-6.538-1.699C3.256 18.241 2 16.646 2 14.715c0-1.762.842-3.589 2.05-5.156a14.557 14.557 0 0 1 4.723-3.954M17 3a6 6 0 0 1 6 6 1 1 0 0 1-1.993.117L21 9a4 4 0 0 0-4-4 1 1 0 1 1 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'WeiboFill'

/**
 * MingCute Icon: Weibo Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const WeiboFill = memo(Icon)
