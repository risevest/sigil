import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M0.994995 19H3.415L4.68499 15.42H10.335L11.595 19H14.015L8.755 5H6.255L0.994995 19ZM5.415 13.39L7.44499 7.6H7.56499L9.595 13.39H5.415ZM20.005 11H23.005V13H20.005V16H18.005V13H15.005V11H18.005V8H20.005V11Z" />
    </Svg>
  )
}

Icon.displayName = 'TextIncrease'

/**
 * Material Icon: Text Increase
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_increase Material Icon Docs}
 */
export const TextIncrease = memo(Icon)
