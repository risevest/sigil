import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.89 11.1C11.11 10.51 10.25 10.14 10.25 9.2C10.25 8.18 11.36 7.81 12.06 7.81C13.37 7.81 13.85 8.8 13.96 9.15L15.54 8.48C15.39 8.03 14.72 6.56 13 6.24V5H11V6.26C8.52 6.82 8.51 9.12 8.51 9.22C8.51 11.49 10.76 12.13 11.86 12.53C13.44 13.09 14.14 13.6 14.14 14.56C14.14 15.69 13.09 16.17 12.16 16.17C10.34 16.17 9.82 14.3 9.76 14.08L8.1 14.75C8.73 16.94 10.38 17.53 11 17.71V19H13V17.76C13.4 17.67 15.9 17.17 15.9 14.54C15.9 13.15 15.29 11.93 12.89 11.1ZM3 21H1V15H7V17H4.52C6.13 19.41 8.88 21 12 21C16.97 21 21 16.97 21 12H23C23 18.08 18.08 23 12 23C8.28 23 4.99 21.15 3 18.33V21ZM1 12C1 5.92 5.92 1 12 1C15.72 1 19.01 2.85 21 5.67V3H23V9H17V7H19.48C17.87 4.59 15.12 3 12 3C7.03 3 3 7.03 3 12H1Z" />
    </Svg>
  )
}

Icon.displayName = 'CurrencyExchange'

/**
 * Material Icon: Currency Exchange
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:currency_exchange Material Icon Docs}
 */
export const CurrencyExchange = memo(Icon)
