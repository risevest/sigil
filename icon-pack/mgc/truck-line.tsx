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
          d="M15 4a2 2 0 0 1 2 2v1h1.52a2 2 0 0 1 1.561.75l1.48 1.851a2 2 0 0 1 .439 1.25V15a2 2 0 0 1-2 2 3 3 0 1 1-6 0h-4a3 3 0 1 1-6 0 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15 6H4v9h.764a2.997 2.997 0 0 1 4.341-.138l.131.138h5.528l.115-.121.121-.115zm3.52 3H17v5c.82 0 1.563.33 2.105.862l.131.138H20v-4.15z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TruckLine'

/**
 * MingCute Icon: Truck Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TruckLine = memo(Icon)
