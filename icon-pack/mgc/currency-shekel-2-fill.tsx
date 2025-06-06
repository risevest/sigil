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
          d="M10 3.5a5.5 5.5 0 0 1 5.496 5.279L15.5 9v6a1.5 1.5 0 0 1-2.993.144L12.5 15V9a2.5 2.5 0 0 0-2.336-2.495L10 6.5H7.5V19a1.5 1.5 0 0 1-2.993.144L4.5 19V5a1.5 1.5 0 0 1 1.356-1.493L6 3.5zm8 0a1.5 1.5 0 0 1 1.493 1.356L19.5 5v14a1.5 1.5 0 0 1-1.356 1.493L18 20.5h-4a5.5 5.5 0 0 1-5.496-5.279L8.5 15V9a1.5 1.5 0 0 1 2.993-.144L11.5 9v6a2.5 2.5 0 0 0 2.336 2.495L14 17.5h2.5V5A1.5 1.5 0 0 1 18 3.5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyShekel2Fill'

/**
 * MingCute Icon: Currency Shekel 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyShekel2Fill = memo(Icon)
