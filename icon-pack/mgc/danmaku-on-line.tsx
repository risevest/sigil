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
          d="M4 15v-1h5a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h1v1.5c0 1.03 1.176 1.618 2 1l3.6-2.7-1.2-1.6L8 18v-.5A1.5 1.5 0 0 0 6.5 16H5a1 1 0 0 1-1-1m0-6a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1m6 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M2 6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v1h-2V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H2zm18.99 7.895a1 1 0 0 0-1.415-1.414l-3.889 3.889-1.765-1.765a1 1 0 1 0-1.414 1.414l2.472 2.472a1 1 0 0 0 1.414 0z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DanmakuOnLine'

/**
 * MingCute Icon: Danmaku On Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DanmakuOnLine = memo(Icon)
