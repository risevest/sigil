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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 4a1 1 0 0 0-.993.883L11 7v1H9.1l-.12.006a1.1 1.1 0 0 0-.974.974L8 9.1v5.8l.006.12a1.1 1.1 0 0 0 .974.974L9.1 16H11v1l.007.117a1 1 0 0 0 1.986 0L13 17v-1h1.5l.164-.005A2.5 2.5 0 0 0 16.5 12a2.5 2.5 0 0 0-1.836-3.995L14.5 8H13V7l-.007-.117A1 1 0 0 0 12 6m2.5 7a.5.5 0 0 1 .09.992L14.5 14H10v-1zm0-3a.5.5 0 0 1 .09.992L14.5 11H10v-1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyBahtFill'

/**
 * MingCute Icon: Currency Baht Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyBahtFill = memo(Icon)
