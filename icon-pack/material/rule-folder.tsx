import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.83 16L5 13.17L6.41 11.76L7.82 13.17L11.36 9.63L12.77 11.04L7.83 16ZM17.41 13L19 14.59L17.59 16L16 14.41L14.41 16L13 14.59L14.59 13L13 11.41L14.41 10L16 11.59L17.59 10L19 11.41L17.41 13ZM20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'RuleFolder'

/**
 * Material Icon: Rule Folder
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rule_folder Material Icon Docs}
 */
export const RuleFolder = memo(Icon)
