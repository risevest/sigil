import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.715 9.28961C13.715 8.73961 14.165 8.28961 14.715 8.28961H17.715C18.265 8.28961 18.715 8.73961 18.715 9.28961V10.2896H17.215V9.78961H15.215V10.7896L13.715 9.28961ZM17.215 12.7896L18.425 13.9996C18.605 13.8096 18.715 13.5596 18.715 13.2896V12.2896H17.215V12.7896ZM9.545 5.28961H19.715V15.4596L21.695 17.4396C21.695 17.3896 21.715 17.3396 21.715 17.2796V5.28961C21.715 4.18961 20.815 3.28961 19.715 3.28961H7.545L9.545 5.28961ZM20.495 21.8996L17.885 19.2896H5.715C4.605 19.2896 3.715 18.3896 3.715 17.2896V5.28961C3.715 5.23961 3.735 5.18961 3.735 5.13961L2.105 3.50961L3.515 2.09961L21.895 20.4796L20.495 21.8996ZM8.215 12.7896H10.215V12.2896H10.885L8.385 9.78961H8.215V12.7896ZM15.885 17.2896L11.715 13.1196V13.2896C11.715 13.8396 11.265 14.2896 10.715 14.2896H7.715C7.165 14.2896 6.715 13.8396 6.715 13.2896V9.28961C6.715 8.96961 6.875 8.69961 7.115 8.50961L5.715 7.11961V17.2896H15.885Z" />
    </Svg>
  )
}

Icon.displayName = 'ClosedCaptionDisabled'

/**
 * Material Icon: Closed Caption Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:closed_caption_disabled Material Icon Docs}
 */
export const ClosedCaptionDisabled = memo(Icon)
