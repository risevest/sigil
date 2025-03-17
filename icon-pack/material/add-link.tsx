import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 9.5H16V11.5H8V9.5ZM20.1 10.5H22C22 7.74 19.76 5.5 17 5.5H13V7.4H17C18.71 7.4 20.1 8.79 20.1 10.5ZM3.9 10.5C3.9 8.79 5.29 7.4 7 7.4H11V5.5H7C4.24 5.5 2 7.74 2 10.5C2 13.26 4.24 15.5 7 15.5H11V13.6H7C5.29 13.6 3.9 12.21 3.9 10.5ZM19 10.5H17V13.5H14V15.5H17V18.5H19V15.5H22V13.5H19V10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddLink'

/**
 * Material Icon: Add Link
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_link Material Icon Docs}
 */
export const AddLink = memo(Icon)
