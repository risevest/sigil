import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 9.8V4.5H16V7.1L12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L19 9.8ZM17 18.5H15V12.5H9V18.5H7V10.69L12 6.19L17 10.69V18.5Z" />
      <Path d="M10 10.5H14C14 9.4 13.1 8.5 12 8.5C10.9 8.5 10 9.4 10 10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'House'

/**
 * Material Icon: House
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:house Material Icon Docs}
 */
export const House = memo(Icon)
