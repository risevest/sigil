import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H3C1.89 3 1.01 3.89 1.01 5L1 17C1 18.11 1.89 19 3 19H13V17H3V11H21V5C21 3.89 20.11 3 19 3ZM19 7H3V5H19V7ZM23 16V18H20V21H18V18H15V16H18V13H20V16H23Z" />
    </Svg>
  )
}

Icon.displayName = 'AddCard'

/**
 * Material Icon: Add Card
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_card Material Icon Docs}
 */
export const AddCard = memo(Icon)
