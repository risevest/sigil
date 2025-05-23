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
          d="M12.185 2.421a1 1 0 0 1 1.697 1.051l-.067.107-.298.421H16.5a1.5 1.5 0 0 1 1.493 1.356L18 5.5V7l-.003.084c.542.19.942.684.997 1.277l.006.14V10a1 1 0 0 1-.879.992l-.116.007-.92 9.2a2 2 0 0 1-1.837 1.794l-.153.006h-6.19a2 2 0 0 1-1.97-1.65l-.02-.15-.92-9.2a1 1 0 0 1-.988-.884L5 10V8.5a1.5 1.5 0 0 1 1.003-1.416l-.002-.042L6 5.5a1.5 1.5 0 0 1 1.356-1.493L7.5 4h3.587l.044-.087.054-.083zm3.71 9.58h-7.79l.8 8h6.19zM17 9H7v1h10zm-1-3H8v1h8z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DrinkLine'

/**
 * MingCute Icon: Drink Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DrinkLine = memo(Icon)
