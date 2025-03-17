import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
      <Path d="M11.25 7.72H6.25V9.22H11.25V7.72Z" />
      <Path d="M18 15.75H13V17.25H18V15.75Z" />
      <Path d="M18 13.25H13V14.75H18V13.25Z" />
      <Path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" />
      <Path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" />
    </Svg>
  )
}

Icon.displayName = 'Calculate'

/**
 * Material Icon: Calculate
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:calculate Material Icon Docs}
 */
export const Calculate = memo(Icon)
