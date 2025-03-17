import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M0.994995 19H3.415L4.68499 15.42H10.335L11.595 19H14.015L8.755 5H6.255L0.994995 19ZM5.415 13.39L7.44499 7.6H7.56499L9.595 13.39H5.415ZM23.005 11V13H15.005V11H23.005Z" />
    </Svg>
  )
}

Icon.displayName = 'TextDecrease'

/**
 * Material Icon: Text Decrease
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_decrease Material Icon Docs}
 */
export const TextDecrease = memo(Icon)
