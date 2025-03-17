import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.49 16C12.37 16 13.19 15.74 13.88 15.3L16.32 17.74L17.74 16.32L15.3 13.89C15.74 13.19 16 12.38 16 11.5C16 9.01 13.99 7 11.5 7C9.01 7 7 9.01 7 11.5C7 13.99 9.01 16 11.49 16ZM11.5 9C12.88 9 14 10.12 14 11.5C14 12.88 12.88 14 11.5 14C10.12 14 9 12.88 9 11.5C9 10.12 10.12 9 11.5 9ZM20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'Pageview'

/**
 * Material Icon: Pageview
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pageview Material Icon Docs}
 */
export const Pageview = memo(Icon)
