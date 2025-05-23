import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 10C6 9.17 6.67 8.5 7.5 8.5C8.33 8.5 9 9.17 9 10C9 10.83 8.33 11.5 7.5 11.5C6.67 11.5 6 10.83 6 10ZM11 18C13.33 18 15.31 16.54 16.11 14.5H5.89C6.69 16.54 8.67 18 11 18ZM14.5 11.5C15.33 11.5 16 10.83 16 10C16 9.17 15.33 8.5 14.5 8.5C13.67 8.5 13 9.17 13 10C13 10.83 13.67 11.5 14.5 11.5ZM21 1.5H19V3.5H17V5.5H19V7.5H21V5.5H23V3.5H21V1.5ZM19 12.5C19 16.92 15.42 20.5 11 20.5C6.58 20.5 3 16.92 3 12.5C3 8.08 6.58 4.5 11 4.5C12.46 4.5 13.82 4.9 15 5.58V3.34C13.77 2.8 12.42 2.5 10.99 2.5C5.47 2.5 1 6.98 1 12.5C1 18.02 5.47 22.5 10.99 22.5C16.52 22.5 21 18.02 21 12.5C21 11.45 20.83 10.45 20.53 9.5H18.4C18.78 10.43 19 11.44 19 12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddReaction'

/**
 * Material Icon: Add Reaction
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_reaction Material Icon Docs}
 */
export const AddReaction = memo(Icon)
