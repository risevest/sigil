import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 21H7V20H17V21ZM17 18H7V6H17V18ZM17 4H7V3H17V4ZM8 10H16V11.5H8V10ZM9 13H15V14.5H9V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Aod'

/**
 * Material Icon: Aod
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:aod Material Icon Docs}
 */
export const Aod = memo(Icon)
