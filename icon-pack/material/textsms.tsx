import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16ZM7 9H9V11H7V9ZM11 9H13V11H11V9ZM15 9H17V11H15V9Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'Textsms'

/**
 * Material Icon: Textsms
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:textsms Material Icon Docs}
 */
export const Textsms = memo(Icon)
