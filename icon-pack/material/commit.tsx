import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.9 11C16.44 8.72 14.42 7 12 7C9.58 7 7.56 8.72 7.1 11H2V13H7.1C7.56 15.28 9.58 17 12 17C14.42 17 16.44 15.28 16.9 13H22V11H16.9ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" />
    </Svg>
  )
}

Icon.displayName = 'Commit'

/**
 * Material Icon: Commit
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:commit Material Icon Docs}
 */
export const Commit = memo(Icon)
