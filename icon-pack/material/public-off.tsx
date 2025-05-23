import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.3049 7.8702L6.79495 3.3602C8.37495 2.3102 10.2649 1.7002 12.3049 1.7002C17.8249 1.7002 22.3049 6.1802 22.3049 11.7002C22.3049 13.7402 21.6949 15.6302 20.6449 17.2102L19.1849 15.7502C19.8949 14.5702 20.3049 13.1802 20.3049 11.7002C20.3049 8.3502 18.2349 5.4802 15.3049 4.2902V4.7002C15.3049 5.8002 14.4049 6.7002 13.3049 6.7002H11.3049V7.8702ZM21.4949 20.8902L20.0849 22.3002L17.8149 20.0302C16.2349 21.0902 14.3449 21.7002 12.3049 21.7002C6.78495 21.7002 2.30495 17.2202 2.30495 11.7002C2.30495 9.6602 2.91495 7.7702 3.96495 6.1902L1.69495 3.9202L3.10495 2.5102L21.4949 20.8902ZM11.3049 17.7002C10.2049 17.7002 9.30495 16.8002 9.30495 15.7002V14.7002L4.51495 9.9102C4.38495 10.4902 4.30495 11.0802 4.30495 11.7002C4.30495 15.7802 7.35495 19.1402 11.3049 19.6302V17.7002Z" />
    </Svg>
  )
}

Icon.displayName = 'PublicOff'

/**
 * Material Icon: Public Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:public_off Material Icon Docs}
 */
export const PublicOff = memo(Icon)
