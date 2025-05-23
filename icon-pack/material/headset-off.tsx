import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.71 3.34473C16.58 3.34473 19.71 6.47473 19.71 10.3447V11.3447H15.71V11.5147L17.54 13.3447H19.71V15.5147L21.71 17.5147V10.3447C21.71 5.37473 17.68 1.34473 12.71 1.34473C10.69 1.34473 8.83002 2.01473 7.33002 3.14473L8.76002 4.57473C9.88002 3.79473 11.24 3.34473 12.71 3.34473Z" />
      <Path d="M2.81002 1.44473L1.40002 2.85473L4.73002 6.18473C4.08002 7.43473 3.71002 8.84473 3.71002 10.3447V17.3447C3.71002 18.4447 4.61002 19.3447 5.71002 19.3447H9.71002V11.3447H5.71002V10.3447C5.71002 9.40473 5.90002 8.51473 6.23002 7.69473L15.71 17.1747V19.3447H17.88L18.88 20.3447H12.71V22.3447H19.71C20.05 22.3447 20.36 22.2547 20.64 22.1047L21.19 22.6547L22.6 21.2447L2.81002 1.44473ZM7.71002 13.3447V17.3447H5.71002V13.3447H7.71002Z" />
    </Svg>
  )
}

Icon.displayName = 'HeadsetOff'

/**
 * Material Icon: Headset Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:headset_off Material Icon Docs}
 */
export const HeadsetOff = memo(Icon)
