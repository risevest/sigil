import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.05 18.0698L3.08 19.0098L3 17.5098L20.98 16.5698L21.05 18.0698ZM21 19.9898H3V21.4898H21V19.9898ZM23 13.5098V4.50977C23 3.40977 22.1 2.50977 21 2.50977H3C1.9 2.50977 1 3.40977 1 4.50977V13.5098C1 14.6098 1.9 15.5098 3 15.5098H21C22.1 15.5098 23 14.6098 23 13.5098ZM21 13.5098H3V4.50977H21V13.5098ZM20 6.50977C18.32 6.50977 16.96 7.48977 16.79 8.73977C16.15 8.00977 14.06 6.00977 10.25 6.00977C5.58 6.00977 3.5 9.00977 3.5 9.00977C3.5 9.00977 5.58 12.0098 10.25 12.0098C14.06 12.0098 16.15 10.0098 16.79 9.27977C16.96 10.5298 18.32 11.5098 20 11.5098V6.50977Z" />
    </Svg>
  )
}

Icon.displayName = 'SetMeal'

/**
 * Material Icon: Set Meal
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:set_meal Material Icon Docs}
 */
export const SetMeal = memo(Icon)
