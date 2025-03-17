import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.655 12.2896C21.505 13.6696 21.035 14.9596 20.325 16.0796L18.855 14.6096C19.235 13.8996 19.505 13.1196 19.625 12.2896H21.655ZM9.38498 5.12961C10.375 4.59961 11.515 4.28961 12.715 4.28961C15.085 4.28961 17.185 5.47961 18.455 7.28961H15.715V9.28961H21.715V3.28961H19.715V5.64961C18.065 3.60961 15.545 2.28961 12.715 2.28961C10.955 2.28961 9.31498 2.79961 7.93498 3.67961L9.38498 5.12961ZM11.715 6.28961V7.45961L13.715 9.45961V6.28961H11.715ZM20.495 21.8996L17.495 18.8996C16.105 19.7696 14.475 20.2896 12.715 20.2896C7.74498 20.2896 3.71498 16.2596 3.71498 11.2896C3.71498 9.52961 4.22498 7.88961 5.10498 6.50961L2.10498 3.50961L3.51498 2.09961L21.895 20.4796L20.495 21.8996ZM16.035 17.4396L6.55498 7.95961C6.02498 8.94961 5.71498 10.0896 5.71498 11.2896C5.71498 15.1496 8.85498 18.2896 12.715 18.2896C13.915 18.2896 15.055 17.9796 16.035 17.4396Z" />
    </Svg>
  )
}

Icon.displayName = 'UpdateDisabled'

/**
 * Material Icon: Update Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:update_disabled Material Icon Docs}
 */
export const UpdateDisabled = memo(Icon)
