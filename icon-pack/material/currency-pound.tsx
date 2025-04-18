import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 21.25C15.93 21.25 17.62 20.08 18 18.25L16.25 17.37C16 18.46 15.33 19.25 14 19.25H9.1C9.93 18.25 10.6 16.91 10.6 15.25C10.6 14.9 10.57 14.56 10.52 14.25H14V12.25H9.82C9 10.67 8 9.85 8 8.25C8 6.32 9.57 4.75 11.5 4.75C13 4.75 14.29 5.7 14.78 7.03L16.63 6.25C15.83 4.2 13.84 2.75 11.5 2.75C8.46 2.75 6 5.21 6 8.25C6 10.03 6.79 11.15 7.49 12.25H6V14.25H8.47C8.55 14.56 8.6 14.89 8.6 15.25C8.6 17.95 6 19.25 6 19.25V21.25H14Z" />
    </Svg>
  )
}

Icon.displayName = 'CurrencyPound'

/**
 * Material Icon: Currency Pound
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:currency_pound Material Icon Docs}
 */
export const CurrencyPound = memo(Icon)
