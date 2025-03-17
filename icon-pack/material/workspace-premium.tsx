import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.68 13.19L12 11.43L14.31 13.19L13.43 10.34L15.75 8.5H12.91L12 5.69L11.09 8.5H8.25L10.56 10.34L9.68 13.19ZM20 9.5C20 5.08 16.42 1.5 12 1.5C7.58 1.5 4 5.08 4 9.5C4 11.53 4.76 13.37 6 14.78V22.5L12 20.5L18 22.5V14.78C19.24 13.37 20 11.53 20 9.5ZM12 3.5C15.31 3.5 18 6.19 18 9.5C18 12.81 15.31 15.5 12 15.5C8.69 15.5 6 12.81 6 9.5C6 6.19 8.69 3.5 12 3.5ZM12 18.5L8 19.52V16.42C9.18 17.1 10.54 17.5 12 17.5C13.46 17.5 14.82 17.1 16 16.42V19.52L12 18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'WorkspacePremium'

/**
 * Material Icon: Workspace Premium
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:workspace_premium Material Icon Docs}
 */
export const WorkspacePremium = memo(Icon)
