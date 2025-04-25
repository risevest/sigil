import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 12 19" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M11.0406 17.144C11.1746 17.3854 11.0875 17.6898 10.846 17.8238C10.6046 17.9578 10.3002 17.8707 10.1662 17.6292L1.91746 2.76453C1.78347 2.52308 1.87059 2.21872 2.11205 2.08473C2.35351 1.95074 2.65787 2.03786 2.79186 2.27931L11.0406 17.144Z"
        fill={color}
      />
      <Path
        d="M8.06925 14.8142L5.41886 18.5642C5.12265 18.9824 4.46331 18.7374 4.51261 18.2273L5.17667 11.4256C5.20519 11.1317 4.97387 10.8777 4.67862 10.8777H1.4003C0.994292 10.8772 0.758491 10.4174 0.994054 10.0867L3.49796 6.57594L8.06925 14.8142Z"
        fill={color}
      />
      <Path
        d="M7.51066 0.953873C7.8219 0.517656 8.50839 0.810094 8.40909 1.33669L7.14151 8.05739C7.08388 8.36491 7.31981 8.64995 7.63273 8.65016H11.4638C11.8693 8.65016 12.1059 9.1071 11.872 9.43825L9.35148 13.0017L4.78507 4.77321L7.51066 0.953873Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CameraFlashOff'

export const CameraFlashOff = memo(Icon)
