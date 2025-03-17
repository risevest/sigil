import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 3H7C6.31 3 5.77 3.35 5.41 3.88L0 12L5.41 20.11C5.77 20.64 6.38 21 7.07 21H22C23.1 21 24 20.1 24 19V5C24 3.9 23.1 3 22 3ZM22 19H7.07L2.4 12L7.06 5H22V19Z" />
      <Path d="M9 13.5C9.82843 13.5 10.5 12.8284 10.5 12C10.5 11.1716 9.82843 10.5 9 10.5C8.17157 10.5 7.5 11.1716 7.5 12C7.5 12.8284 8.17157 13.5 9 13.5Z" />
      <Path d="M14 13.5C14.8284 13.5 15.5 12.8284 15.5 12C15.5 11.1716 14.8284 10.5 14 10.5C13.1716 10.5 12.5 11.1716 12.5 12C12.5 12.8284 13.1716 13.5 14 13.5Z" />
      <Path d="M19 13.5C19.8284 13.5 20.5 12.8284 20.5 12C20.5 11.1716 19.8284 10.5 19 10.5C18.1716 10.5 17.5 11.1716 17.5 12C17.5 12.8284 18.1716 13.5 19 13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'More'

/**
 * Material Icon: More
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:more Material Icon Docs}
 */
export const More = memo(Icon)
