import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.92 11H18V13H13V15H18V17H13V21H11V17H6V15H11V13H6V11H10.08L5 3H7.37L12 10.29L16.63 3H19L13.92 11Z" />
    </Svg>
  )
}

Icon.displayName = 'CurrencyYen'

/**
 * Material Icon: Currency Yen
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:currency_yen Material Icon Docs}
 */
export const CurrencyYen = memo(Icon)
