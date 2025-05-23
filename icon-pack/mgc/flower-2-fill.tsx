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
          d="M10.24 3.209a5.35 5.35 0 0 1 1.82 1.254 5.865 5.865 0 0 1 1.805-1.21c.997-.413 2.14-.487 3.135.087.994.574 1.503 1.602 1.644 2.671.09.688.038 1.428-.147 2.17a5.34 5.34 0 0 1 1.996.947C21.373 9.812 22 10.816 22 12c0 1.178-.62 2.178-1.493 2.86a5.317 5.317 0 0 1-1.928.939c.197.721.25 1.453.152 2.138-.156 1.097-.71 2.134-1.73 2.723-1.027.593-2.21.55-3.241.131a5.346 5.346 0 0 1-1.819-1.254c-.55.53-1.165.946-1.806 1.21-.997.413-2.14.487-3.135-.087-.994-.574-1.502-1.602-1.644-2.671a5.864 5.864 0 0 1 .147-2.17 5.346 5.346 0 0 1-1.996-.947C2.627 14.188 2 13.185 2 12c0-1.178.62-2.177 1.493-2.86A5.316 5.316 0 0 1 5.42 8.2a5.316 5.316 0 0 1-.152-2.138C5.425 4.966 5.979 3.929 7 3.34c1.026-.592 2.209-.55 3.24-.131M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Flower2Fill'

/**
 * MingCute Icon: Flower 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Flower2Fill = memo(Icon)
