import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.28 12H18V14H13V21H11V14H6V12H10.72L5 3H7.37L12 10.29L16.63 3H19L13.28 12Z" />
    </Svg>
  )
}

Icon.displayName = 'CurrencyYuan'

/**
 * Material Icon: Currency Yuan
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:currency_yuan Material Icon Docs}
 */
export const CurrencyYuan = memo(Icon)
