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
          d="M14 2a2 2 0 0 1 2 2v1.416c1.766.772 3 2.534 3 4.584v4a5.001 5.001 0 0 1-3 4.584V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.416A5.001 5.001 0 0 1 5 14v-4a5.001 5.001 0 0 1 3-4.584V4a2 2 0 0 1 2-2zm0 17h-4v1h4zm0-12h-4a3 3 0 0 0-2.995 2.824L7 10v4a3 3 0 0 0 2.824 2.995L10 17h4a3 3 0 0 0 2.995-2.824L17 14v-4a3 3 0 0 0-3-3m-2 1a1 1 0 0 1 1 1v2.586l1.156 1.156a1 1 0 0 1-1.414 1.414l-1.45-1.449a.997.997 0 0 1-.292-.72V9a1 1 0 0 1 1-1m2-4h-4v1h4z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'WatchLine'

/**
 * MingCute Icon: Watch Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const WatchLine = memo(Icon)
