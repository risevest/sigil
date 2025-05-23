import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.56 11.57C17.15 10.88 17.5 9.98 17.5 9C17.5 7.14 16.23 5.57 14.5 5.13V3H12.5V5H10.5V3H8.5V5H5.5V7H7.5V17H5.5V19H8.5V21H10.5V19H12.5V21H14.5V19C16.71 19 18.5 17.21 18.5 15C18.5 13.55 17.72 12.27 16.56 11.57ZM9.5 7H13.5C14.6 7 15.5 7.9 15.5 9C15.5 10.1 14.6 11 13.5 11H9.5V7ZM14.5 17H9.5V13H14.5C15.6 13 16.5 13.9 16.5 15C16.5 16.1 15.6 17 14.5 17Z" />
    </Svg>
  )
}

Icon.displayName = 'CurrencyBitcoin'

/**
 * Material Icon: Currency Bitcoin
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:currency_bitcoin Material Icon Docs}
 */
export const CurrencyBitcoin = memo(Icon)
