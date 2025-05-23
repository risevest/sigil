import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 1a1 1 0 0 1 .993.883L13 2v2.17a3.001 3.001 0 0 1 1.222 4.846l-.137.141.785 2.748A4.994 4.994 0 0 1 17 16a4.98 4.98 0 0 1-.759 2.65l-.136.205 1.727 2.59a1 1 0 0 1-1.594 1.203l-.07-.093-1.535-2.303a4.97 4.97 0 0 1-1.342.58l-.29.068V22a1 1 0 0 1-1.994.117L11 22v-1.1a4.97 4.97 0 0 1-1.381-.502l-.251-.146-1.536 2.303a1 1 0 0 1-1.723-1.009l.06-.1 1.726-2.59A4.977 4.977 0 0 1 7 16c0-1.609.76-3.04 1.94-3.955l.19-.14.785-2.748a3 3 0 0 1 .913-4.92L11 4.172V2a1 1 0 0 1 1-1m2.961 15.483c-.79.256-1.86.517-2.96.517-1.103 0-2.171-.26-2.962-.517a3 3 0 0 0 5.922 0M12.001 13a2.999 2.999 0 0 0-2.597 1.496c.713.25 1.68.504 2.596.504.916 0 1.883-.254 2.596-.504A2.999 2.999 0 0 0 12 13Zm.242-3.01a3.077 3.077 0 0 1-.324.009l-.162-.009-.296 1.039c.265-.029.54-.036.81-.022l.269.022zM12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TvToweLine'

/**
 * MingCute Icon: Tv Towe Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TvToweLine = memo(Icon)
