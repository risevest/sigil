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
          d="M5.847 3.549A1.998 1.998 0 0 1 7.794 2h8.412c.93 0 1.738.642 1.947 1.549l1.023 4.431c.988 4.284-1.961 8.388-6.178 8.954A.97.97 0 0 1 13 17v3h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-3c0-.022 0-.044.002-.066-4.216-.566-7.166-4.67-6.177-8.954zM7.796 4 6.773 8.43C5.998 11.79 8.551 15 12 15c3.45 0 6.003-3.209 5.227-6.57L16.205 4h-8.41Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'WineglassLine'

/**
 * MingCute Icon: Wineglass Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const WineglassLine = memo(Icon)
