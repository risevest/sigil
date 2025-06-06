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
          d="M18.93 5a3 3 0 0 1 2.38 1.173l.116.163 1.07 1.605a3 3 0 0 1 .496 1.443l.008.222V16a2 2 0 0 1-1.85 1.995L21 18h-.17a3.001 3.001 0 0 1-5.592.172L15.17 18H8.829a3.001 3.001 0 0 1-5.591.172L3.17 18H3a2 2 0 0 1-1.995-1.85L1 16V8a3 3 0 0 1 2.824-2.995L4 5zM18 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12.93-9H18v4h3V9.606a1 1 0 0 0-.168-.555l-1.07-1.606A1 1 0 0 0 18.93 7M6 7H4a1 1 0 0 0-.993.883L3 8v2h3zm5 0H8v3h3zm5 0h-3v3h3z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Bus2Fill'

/**
 * MingCute Icon: Bus 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Bus2Fill = memo(Icon)
