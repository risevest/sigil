import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 12 19" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M0.56397 9.98232L7.08075 0.848948C7.392 0.412731 8.07841 0.70542 7.97911 1.23201L6.71176 7.9528C6.65371 8.26066 6.88982 8.54545 7.2031 8.54545H11.034C11.4396 8.54545 11.6765 9.00297 11.4423 9.33414L4.98898 18.46C4.69281 18.8789 4.0333 18.6334 4.0831 18.1228L4.7465 11.3213C4.77517 11.0273 4.54418 10.7727 4.24886 10.7727H0.970984C0.564415 10.7727 0.327826 10.3133 0.56397 9.98232Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'CameraFlash'

export const CameraFlash = memo(Icon)
