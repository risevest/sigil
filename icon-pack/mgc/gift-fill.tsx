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
          d="M20 13v5a3 3 0 0 1-3 3h-4v-8zm-9 0v8H7a3 3 0 0 1-3-3v-5zM9 2a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 2h.5A1.5 1.5 0 0 1 17 3.5V4c0 .729-.195 1.412-.535 2H19a2 2 0 0 1 2 2v2c0 .364-.097.706-.268 1H13V8a1 1 0 1 0-2 0v3H3.268A1.99 1.99 0 0 1 3 10V8a2 2 0 0 1 2-2h2.535A3.982 3.982 0 0 1 7 4v-.5A1.5 1.5 0 0 1 8.5 2Zm0 2a2 2 0 0 0 2 2 2 2 0 0 0-2-2m6 0a2 2 0 0 0-2 2 2 2 0 0 0 2-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'GiftFill'

/**
 * MingCute Icon: Gift Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const GiftFill = memo(Icon)
