import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M2.81 2.09961L1.39 3.50961L3.98 6.09961C2.2 7.13961 1 9.07961 1 11.2896C1 14.5996 3.69 17.2896 7 17.2896C9.22 17.2896 11.15 16.0796 12.19 14.2896L19.78 21.8996L21.19 20.4896L2.81 2.09961ZM7 15.2896C4.79 15.2896 3 13.4996 3 11.2896C3 9.61961 4.02 8.18961 5.47 7.58961L7.18 9.29961C7.12 9.28961 7.06 9.28961 7 9.28961C5.9 9.28961 5 10.1896 5 11.2896C5 12.3896 5.9 13.2896 7 13.2896C8.1 13.2896 9 12.3896 9 11.2896C9 11.2296 9 11.1696 8.99 11.1096L10.73 12.8496C10.22 13.7696 9.14 15.2896 7 15.2896ZM17 13.4596V12.2896H15.83L17 13.4596ZM13.83 10.2896H21V12.2896H19V15.2896L21 17.2896V14.2896H23V8.28961H11.83L13.83 10.2896Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'VpnKeyOff'

/**
 * Material Icon: Vpn Key Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vpn_key_off Material Icon Docs}
 */
export const VpnKeyOff = memo(Icon)
