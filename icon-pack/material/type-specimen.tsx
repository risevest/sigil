import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6Z" />
      <Path d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16Z" />
      <Path d="M12.19 12.2H15.82L16.62 14.5H18.18L14.8 5.5H13.2L9.82 14.5H11.38L12.19 12.2ZM13.96 7.17H14.04L15.35 10.89H12.66L13.96 7.17Z" />
    </Svg>
  )
}

Icon.displayName = 'TypeSpecimen'

/**
 * Material Icon: Type Specimen
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:type_specimen Material Icon Docs}
 */
export const TypeSpecimen = memo(Icon)
