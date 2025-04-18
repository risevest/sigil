import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.805 8.28961C18.635 8.28961 19.305 8.95961 19.305 9.78961C19.305 10.6196 18.635 11.2896 17.805 11.2896C16.975 11.2896 16.305 10.6196 16.305 9.78961C16.305 8.95961 16.975 8.28961 17.805 8.28961ZM11.135 7.28961H20.305V15.2896H19.135L21.005 17.1596C21.755 16.8696 22.305 16.1396 22.305 15.2896V7.28961C22.305 6.18961 21.405 5.28961 20.305 5.28961H9.13501L11.135 7.28961ZM20.085 21.8996L15.475 17.2896H4.30501C3.20501 17.2896 2.30501 16.3896 2.30501 15.2896V7.28961C2.30501 6.43961 2.85501 5.70961 3.60501 5.41961L1.69501 3.50961L3.10501 2.09961L21.485 20.4796L20.085 21.8996ZM13.475 15.2896L10.475 12.2896H9.30501V14.2896H7.30501V12.2896H5.30501V10.2896H7.30501V9.11961L5.47501 7.28961H4.30501V15.2896H13.475Z" />
    </Svg>
  )
}

Icon.displayName = 'VideogameAssetOff'

/**
 * Material Icon: Videogame Asset Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:videogame_asset_off Material Icon Docs}
 */
export const VideogameAssetOff = memo(Icon)
