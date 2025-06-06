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
          d="M11.132 13.004a1 1 0 0 1 1.788.888l-.052.104L11.723 16h2.105a1.1 1.1 0 0 1 1.006 1.545l-.051.1-1.915 3.351a1 1 0 0 1-1.788-.888l.052-.104L12.277 18h-2.105a1.1 1.1 0 0 1-1.006-1.545l.051-.1zM11.5 2a6.502 6.502 0 0 1 6.086 4.212 6.002 6.002 0 0 1-.773 11.733c.449-1.555-.41-3.198-1.894-3.751a3.001 3.001 0 0 0-5.524-2.182l-1.914 3.35A3.06 3.06 0 0 0 7.273 18H7a5 5 0 0 1-2-9.584A6.5 6.5 0 0 1 11.5 2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CloudLightningFill'

/**
 * MingCute Icon: Cloud Lightning Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CloudLightningFill = memo(Icon)
