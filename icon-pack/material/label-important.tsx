import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.5 18.9949H14.5C15.17 18.9949 15.77 18.6749 16.13 18.1649L20.5 12.0049L16.13 5.84488C15.77 5.33488 15.17 5.00488 14.5 5.00488H3.5L8.5 12.0049L3.5 18.9949Z" />
    </Svg>
  )
}

Icon.displayName = 'LabelImportant'

/**
 * Material Icon: Label Important
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:label_important Material Icon Docs}
 */
export const LabelImportant = memo(Icon)
