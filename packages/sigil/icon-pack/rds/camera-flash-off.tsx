import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CameraFlashOff = /* @__PURE__ */ memo(function CameraFlashOff(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 12 19" width={size} height={size} {...props}>
      <Path
        fill={color}
        d="M11.04 17.144a.5.5 0 1 1-.874.485L1.917 2.765a.5.5 0 1 1 .875-.486zM8.07 14.814l-2.651 3.75c-.296.418-.956.173-.906-.337l.664-6.801a.5.5 0 0 0-.498-.548H1.4a.5.5 0 0 1-.406-.791l2.504-3.511zM7.51.954c.312-.436.998-.144.9.383l-1.268 6.72a.5.5 0 0 0 .49.593h3.832a.5.5 0 0 1 .408.788l-2.52 3.564-4.567-8.229z"
      />
    </Svg>
  )
})
export { CameraFlashOff }
