import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M18.05 13.8296L16.62 12.3996C17.18 11.6696 17.67 10.8996 18.09 10.0796L15.89 7.87961C15.61 7.59961 15.53 7.20961 15.64 6.85961C16.01 5.73961 16.21 4.53961 16.21 3.28961C16.21 2.73961 16.66 2.28961 17.21 2.28961H20.71C21.26 2.28961 21.71 2.73961 21.71 3.28961C21.71 7.26961 20.34 10.9296 18.05 13.8296ZM15.23 16.6396C12.34 18.9296 8.68001 20.2896 4.71001 20.2896C4.16001 20.2896 3.71001 19.8396 3.71001 19.2896V15.7996C3.71001 15.2496 4.16001 14.7996 4.71001 14.7996C5.95001 14.7996 7.16001 14.5996 8.28001 14.2296C8.38001 14.1896 8.49001 14.1796 8.59001 14.1796C8.85001 14.1796 9.10001 14.2796 9.30001 14.4696L11.5 16.6696C12.31 16.2496 13.08 15.7696 13.8 15.2096L2.10001 3.50961L3.52001 2.09961L21.9 20.4896L20.49 21.8996L15.23 16.6396ZM8.31001 16.3096C7.46001 16.5496 6.59001 16.6996 5.71001 16.7596V18.2496C7.03001 18.1596 8.30001 17.8996 9.51001 17.4996L8.31001 16.3096ZM18.17 4.28961C18.11 5.17961 17.96 6.04961 17.72 6.87961L18.92 8.07961C19.33 6.87961 19.59 5.60961 19.68 4.28961H18.17Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'PhoneDisabled'

/**
 * Material Icon: Phone Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phone_disabled Material Icon Docs}
 */
export const PhoneDisabled = memo(Icon)
