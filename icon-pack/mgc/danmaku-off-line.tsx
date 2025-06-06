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
          d="M4 14v1a1 1 0 0 0 1 1h1.5A1.5 1.5 0 0 1 8 17.5v.5l2.4-1.8 1.2 1.6L8 20.5c-.824.618-2 .03-2-1V18H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2zm1-6a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM5 3a3 3 0 0 0-3 3v1h2V6a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v1h2V6a3 3 0 0 0-3-3zm8 13.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m2.172-.914a2.5 2.5 0 0 0 3.241 3.241zm1.414-1.414 3.242 3.242a2.5 2.5 0 0 0-3.241-3.241"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DanmakuOffLine'

/**
 * MingCute Icon: Danmaku Off Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DanmakuOffLine = memo(Icon)
