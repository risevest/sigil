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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M9.22 8h-.44a2 2 0 0 0-1.94 1.515l-1.31 5.243a1 1 0 1 0 1.94.485L7.78 14h2.44l.31 1.242a1 1 0 1 0 1.94-.485l-1.31-5.242A2 2 0 0 0 9.22 8M16 8h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v-4zm-6.78 0 .5 2H8.28l.5-2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AdCircleFill'

/**
 * MingCute Icon: Ad Circle Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AdCircleFill = memo(Icon)
