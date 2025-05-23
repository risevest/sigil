import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 19.4898H8V12.8598C9.26 12.5198 10.11 11.5898 10.77 10.8698C11.6 9.95977 12.08 9.48977 13 9.48977H15V19.4898ZM10 2.50977C8.11 2.50977 6.49 3.61977 5.73 5.21977C4.15 5.74977 3 7.22977 3 8.98977C3 10.8498 4.28 12.3998 6 12.8498V21.4898H17V19.4898H19C20.1 19.4898 21 18.5898 21 17.4898V11.4898C21 10.3898 20.1 9.48977 19 9.48977H17.44C17.79 8.89977 18 8.21977 18 7.48977C18 5.27977 16.21 3.48977 14 3.48977C13.66 3.48977 13.34 3.53977 13.02 3.61977C12.2 2.93977 11.16 2.50977 10 2.50977ZM7 10.9898C5.9 10.9898 5 10.0898 5 8.98977C5 8.13977 5.55 7.38977 6.37 7.10977L7.17 6.83977L7.53 6.07977C8 5.10977 8.94 4.50977 10 4.50977C10.79 4.50977 11.39 4.85977 11.74 5.15977L12.52 5.80977C12.52 5.80977 13.16 5.48977 13.99 5.48977C15.09 5.48977 15.99 6.38977 15.99 7.48977H12.99C9.67 7.48977 9.15 10.9898 7 10.9898ZM17 17.4898V11.4898H19V17.4898H17Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsBar'

/**
 * Material Icon: Sports Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_bar Material Icon Docs}
 */
export const SportsBar = memo(Icon)
