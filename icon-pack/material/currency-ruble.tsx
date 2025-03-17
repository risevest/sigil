import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 3H7V12H5V14H7V16H5V18H7V21H9V18H13V16H9V14H13.5C16.54 14 19 11.54 19 8.5C19 5.46 16.54 3 13.5 3ZM13.5 12H9V5H13.5C15.43 5 17 6.57 17 8.5C17 10.43 15.43 12 13.5 12Z" />
    </Svg>
  )
}

Icon.displayName = 'CurrencyRuble'

/**
 * Material Icon: Currency Ruble
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:currency_ruble Material Icon Docs}
 */
export const CurrencyRuble = memo(Icon)
