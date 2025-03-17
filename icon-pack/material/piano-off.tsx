import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.9 20.4796L3.51998 2.09961L2.09998 3.50961L3.70998 5.11961V18.2896C3.70998 19.3896 4.60998 20.2896 5.70998 20.2896H18.88L20.49 21.8996L21.9 20.4796ZM8.95998 18.2896H5.70998V7.11961L7.70998 9.11961V12.7896C7.70998 13.3396 8.15998 13.7896 8.70998 13.7896H8.95998V18.2896ZM10.46 18.2896V13.7896H10.71C11.17 13.7896 11.53 13.4796 11.65 13.0596L14.96 16.3696V18.2896H10.46ZM11.71 7.45961L6.53998 2.28961H19.71C20.81 2.28961 21.71 3.18961 21.71 4.28961V17.4596L19.71 15.4596V4.28961H17.71V12.7896C17.71 12.9796 17.64 13.1496 17.55 13.2996L13.71 9.45961V4.28961H11.71V7.45961Z" />
    </Svg>
  )
}

Icon.displayName = 'PianoOff'

/**
 * Material Icon: Piano Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:piano_off Material Icon Docs}
 */
export const PianoOff = memo(Icon)
