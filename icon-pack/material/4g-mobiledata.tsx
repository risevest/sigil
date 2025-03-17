import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 7H7V12H5V7H3V14H7V17H9V14H11V12H9V7ZM17 11V13H19V15H14V9H21C21 7.9 20.1 7 19 7H14C12.9 7 12 7.9 12 9V15C12 16.1 12.9 17 14 17H19C20.1 17 21 16.1 21 15V11H17Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi4gMobiledata'

/**
 * Material Icon: 4g Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:4g_mobiledata Material Icon Docs}
 */
export const Mi4gMobiledata = memo(Icon)
