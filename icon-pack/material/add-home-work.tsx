import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 13H5V18H3V11.03L8 7.46L13 11.03V12.11C13.57 11.52 14.25 11.04 15 10.69V10L8 5L1 10V20H7V15H9V20H11.68C11.25 19.09 11 18.08 11 17V13Z" />
      <Path d="M19 6H17V8H19V6Z" />
      <Path d="M23 12.11V2H10V3.97L12 5.4V4H21V10.68C21.75 11.04 22.43 11.52 23 12.11Z" />
      <Path d="M23 17C23 14.24 20.76 12 18 12C15.24 12 13 14.24 13 17C13 19.76 15.24 22 18 22C20.76 22 23 19.76 23 17ZM17.5 20V17.5H15V16.5H17.5V14H18.5V16.5H21V17.5H18.5V20H17.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddHomeWork'

/**
 * Material Icon: Add Home Work
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_home_work Material Icon Docs}
 */
export const AddHomeWork = memo(Icon)
