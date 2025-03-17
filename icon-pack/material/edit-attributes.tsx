import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.63 7H6.37C3.96 7 2 9.24 2 12C2 14.76 3.96 17 6.37 17H17.63C20.04 17 22 14.76 22 12C22 9.24 20.04 7 17.63 7ZM17.63 15H6.37C5.09 15 4 13.63 4 12C4 10.37 5.09 9 6.37 9H17.63C18.91 9 20 10.37 20 12C20 13.63 18.91 15 17.63 15ZM7.24 13.06L5.37 11.19L4.67 11.89L7.24 14.46L11.46 10.24L10.76 9.54L7.24 13.06Z" />
    </Svg>
  )
}

Icon.displayName = 'EditAttributes'

/**
 * Material Icon: Edit Attributes
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:edit_attributes Material Icon Docs}
 */
export const EditAttributes = memo(Icon)
