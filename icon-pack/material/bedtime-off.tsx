import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.97998 4.1802C9.84998 4.7702 9.77998 5.33019 9.73998 5.89019L11.79 7.9402C11.52 5.89019 11.89 3.7202 13.05 1.7102C12.93 1.7102 12.82 1.7002 12.7 1.7002C10.65 1.7002 8.76998 2.3102 7.19998 3.3502L8.65998 4.8102C9.07998 4.5702 9.51998 4.3502 9.97998 4.1802ZM2.09998 3.9102L4.36998 6.18019C3.31998 7.76019 2.70998 9.6602 2.70998 11.6902C2.70998 17.2102 7.18998 21.6902 12.71 21.6902C14.75 21.6902 16.63 21.0602 18.21 20.0202L20.49 22.3002L21.9 20.8902L3.51998 2.5002L2.09998 3.9102ZM5.83998 7.6502L16.76 18.5702C15.55 19.2902 14.16 19.6902 12.71 19.6902C8.29998 19.6902 4.70998 16.1002 4.70998 11.6902C4.70998 10.2102 5.12998 8.8402 5.83998 7.6502Z" />
    </Svg>
  )
}

Icon.displayName = 'BedtimeOff'

/**
 * Material Icon: Bedtime Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bedtime_off Material Icon Docs}
 */
export const BedtimeOff = memo(Icon)
