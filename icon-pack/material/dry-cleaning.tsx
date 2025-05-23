import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.56 11.3612L13 8.44116V7.00116C13 6.45116 12.55 6.00116 12 6.00116C11.45 6.00116 11 5.55116 11 5.00116C11 4.45116 11.45 4.00116 12 4.00116C12.55 4.00116 13 4.45116 13 5.00116H15C15 3.16116 13.34 1.70116 11.44 2.05116C10.26 2.27116 9.29 3.22116 9.06 4.40116C8.76 5.96116 9.66 7.34116 11 7.82116V8.45116L4.44 11.3712C3.56 11.7512 3 12.6212 3 13.5712V13.5812C3 14.9212 4.08 16.0012 5.42 16.0012H7V22.0012H17V16.0012H18.58C19.92 16.0012 21 14.9212 21 13.5812V13.5712C21 12.6212 20.44 11.7512 19.56 11.3612ZM15 20.0012H9V15.0012H15V20.0012ZM18.58 14.0012H17V13.0012H7V14.0012H5.42C4.96 14.0012 4.84 13.3512 5.25 13.1912L12 10.1912L18.75 13.1912C19.17 13.3812 19.03 14.0012 18.58 14.0012Z" />
    </Svg>
  )
}

Icon.displayName = 'DryCleaning'

/**
 * Material Icon: Dry Cleaning
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dry_cleaning Material Icon Docs}
 */
export const DryCleaning = memo(Icon)
