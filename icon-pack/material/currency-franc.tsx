import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.5 5V3H7.5V16H5.5V18H7.5V21H9.5V18H13.5V16H9.5V13H17.5V11H9.5V5H18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'CurrencyFranc'

/**
 * Material Icon: Currency Franc
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:currency_franc Material Icon Docs}
 */
export const CurrencyFranc = memo(Icon)
