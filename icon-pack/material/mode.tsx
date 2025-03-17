import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.0587 9.02L14.9787 9.94L5.91875 19H4.99875V18.08L14.0587 9.02ZM17.6587 3C17.4087 3 17.1487 3.1 16.9587 3.29L15.1287 5.12L18.8787 8.87L20.7087 7.04C21.0987 6.65 21.0987 6.02 20.7087 5.63L18.3687 3.29C18.1687 3.09 17.9187 3 17.6587 3ZM14.0587 6.19L2.99875 17.25V21H6.74875L17.8087 9.94L14.0587 6.19Z" />
    </Svg>
  )
}

Icon.displayName = 'Mode'

/**
 * Material Icon: Mode
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mode Material Icon Docs}
 */
export const Mode = memo(Icon)
