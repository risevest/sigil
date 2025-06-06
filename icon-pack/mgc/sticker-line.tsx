import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M18 3a3 3 0 0 1 2.995 2.824L21 6v7.172a3 3 0 0 1-.743 1.976l-.136.145-4.828 4.828a3 3 0 0 1-1.923.872l-.198.007H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6v-4a3 3 0 0 1 3-3h4V6a1 1 0 0 0-1-1m.586 9H15a1 1 0 0 0-.993.883L14 15v3.586z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'StickerLine'

/**
 * MingCute Icon: Sticker Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const StickerLine = memo(Icon)
