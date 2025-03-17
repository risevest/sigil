import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.8 10.2L4.2 4.5L3.5 6.4L17.6 11.5H5C3.9 11.5 3 12.4 3 13.5V17.5C3 18.6 3.9 19.5 5 19.5H19C20.1 19.5 21 18.6 21 17.5V12C21 11.2 20.5 10.4 19.8 10.2ZM19 17.5H5V13.5H19V17.5ZM6 14.5H8V16.5H6V14.5ZM10 14.5H18V16.5H10V14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Scanner'

/**
 * Material Icon: Scanner
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:scanner Material Icon Docs}
 */
export const Scanner = memo(Icon)
