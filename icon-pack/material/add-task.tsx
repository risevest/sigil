import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 5.18L9.59 16.6L5.35 12.36L6.76 10.95L9.59 13.78L19.59 3.78L21 5.18ZM11 20C6.59 20 3 16.41 3 12C3 7.59 6.59 4 11 4C12.57 4 14.04 4.46 15.28 5.25L16.73 3.8C15.1 2.67 13.13 2 11 2C5.48 2 1 6.48 1 12C1 17.52 5.48 22 11 22C12.73 22 14.36 21.56 15.78 20.78L14.28 19.28C13.28 19.74 12.17 20 11 20ZM18 15H15V17H18V20H20V17H23V15H20V12H18V15Z" />
    </Svg>
  )
}

Icon.displayName = 'AddTask'

/**
 * Material Icon: Add Task
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_task Material Icon Docs}
 */
export const AddTask = memo(Icon)
