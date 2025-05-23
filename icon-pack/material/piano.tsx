import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14 14.5H14.25V19H9.75V14.5H10C10.55 14.5 11 14.05 11 13.5V5H13V13.5C13 14.05 13.45 14.5 14 14.5ZM5 5H7V13.5C7 14.05 7.45 14.5 8 14.5H8.25V19H5V5ZM19 19H15.75V14.5H16C16.55 14.5 17 14.05 17 13.5V5H19V19Z" />
    </Svg>
  )
}

Icon.displayName = 'Piano'

/**
 * Material Icon: Piano
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:piano Material Icon Docs}
 */
export const Piano = memo(Icon)
