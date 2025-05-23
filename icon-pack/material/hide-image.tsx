import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.71 4.28961V15.4596L21.71 17.4596V4.28961C21.71 3.18961 20.81 2.28961 19.71 2.28961H6.53998L8.53998 4.28961H19.71Z" />
      <Path d="M3.51998 2.09961L2.09998 3.50961L3.70998 5.11961V18.2896C3.70998 19.3896 4.60998 20.2896 5.70998 20.2896H18.88L20.49 21.8996L21.9 20.4896L3.51998 2.09961ZM5.70998 18.2896V7.11961L12.78 14.1896L11.96 15.2896L9.70998 12.2896L6.70998 16.2896H14.88L16.88 18.2896H5.70998Z" />
    </Svg>
  )
}

Icon.displayName = 'HideImage'

/**
 * Material Icon: Hide Image
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hide_image Material Icon Docs}
 */
export const HideImage = memo(Icon)
