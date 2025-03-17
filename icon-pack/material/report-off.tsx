import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.39001 4.71004H15.19L19.29 8.81004V14.61L19.07 14.83L20.49 16.24L21.29 15.44V7.98004L16.02 2.71004H8.56001L7.76001 3.51004L9.17001 4.93004L9.39001 4.71004Z" />
      <Path d="M12.29 16.71C12.8423 16.71 13.29 16.2623 13.29 15.71C13.29 15.1578 12.8423 14.71 12.29 14.71C11.7377 14.71 11.29 15.1578 11.29 15.71C11.29 16.2623 11.7377 16.71 12.29 16.71Z" />
      <Path d="M13.29 9.04004V6.71004H11.29V7.04004L13.29 9.04004ZM2.70001 1.29004L1.29001 2.70004L4.93001 6.34004L3.29001 7.98004V15.44L8.56001 20.71H16.02L17.66 19.07L21.3 22.71L22.71 21.3L2.70001 1.29004ZM15.19 18.71H9.39001L5.29001 14.61V8.81004L6.34001 7.76004L16.24 17.66L15.19 18.71Z" />
    </Svg>
  )
}

Icon.displayName = 'ReportOff'

/**
 * Material Icon: Report Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:report_off Material Icon Docs}
 */
export const ReportOff = memo(Icon)
