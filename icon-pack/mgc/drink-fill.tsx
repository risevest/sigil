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
          d="M13.815 3.579a1 1 0 0 0-1.63-1.158l-1 1.409a1.006 1.006 0 0 0-.098.17H7.5A1.5 1.5 0 0 0 6 5.5V7l.003.084A1.5 1.5 0 0 0 5 8.5V10a1 1 0 0 0 .995 1l.92 9.2a2 2 0 0 0 1.99 1.8h6.19a2 2 0 0 0 1.99-1.8l.92-9.2A1 1 0 0 0 19 10V8.5a1.5 1.5 0 0 0-1.003-1.416L18 7V5.5A1.5 1.5 0 0 0 16.5 4h-2.983zM8 7V6h8v1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DrinkFill'

/**
 * MingCute Icon: Drink Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DrinkFill = memo(Icon)
