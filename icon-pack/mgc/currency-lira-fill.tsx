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
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-15a1 1 0 1 0-2 0v2.132l-1.947.974a1 1 0 1 0 .894 1.788L10 11.368v.764l-1.947.974a1 1 0 1 0 .894 1.788L10 14.368V17a1 1 0 0 0 1 1c.737 0 1.786-.333 2.746-.882.984-.562 2.032-1.439 2.648-2.67a1 1 0 1 0-1.788-.895c-.384.768-1.086 1.39-1.852 1.829a5.925 5.925 0 0 1-.754.363v-2.377l1.947-.974a1 1 0 1 0-.894-1.788L12 11.132v-.764l1.947-.974a1 1 0 1 0-.894-1.788L12 8.132z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyLiraFill'

/**
 * MingCute Icon: Currency Lira Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyLiraFill = memo(Icon)
