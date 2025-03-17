import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.5 11.5L17.13 17.66C16.76 18.18 16.15 18.5 15.5 18.5H12.5V16.5H15.5L19.05 11.5L15.5 6.5H5.5V9.5H3.5V6.5C3.5 5.4 4.4 4.5 5.5 4.5H15.5C16.15 4.5 16.76 4.81 17.13 5.34L21.5 11.5ZM10.5 14.5H7.5V11.5H5.5V14.5H2.5V16.5H5.5V19.5H7.5V16.5H10.5V14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'NewLabel'

/**
 * Material Icon: New Label
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:new_label Material Icon Docs}
 */
export const NewLabel = memo(Icon)
