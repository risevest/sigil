import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 9V11H10.5V9H8V7H10.5V1H3.5V7H6V9H3.5V15H6V17H3.5V23H10.5V17H8V15H10.5V13H13.5V15H20.5V9H13.5ZM5.5 3H8.5V5H5.5V3ZM8.5 21H5.5V19H8.5V21ZM8.5 13H5.5V11H8.5V13ZM18.5 13H15.5V11H18.5V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Schema'

/**
 * Material Icon: Schema
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:schema Material Icon Docs}
 */
export const Schema = memo(Icon)
