import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BusdLogo = /* @__PURE__ */ memo(function BusdLogo(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 336.41 337.42" width={size} height={size} {...props}>
      <Path
        fill="#f0b90b"
        stroke="#f0b90b"
        d="m168.2.71 41.5 42.5-104.5 104.5-41.5-41.5ZM231.2 63.71l41.5 42.5-167.5 167.5-41.5-41.5ZM42.2 126.71l41.5 42.5-41.5 41.5-41.5-41.5ZM294.2 126.71l41.5 42.5-167.5 167.5-41.5-41.5Z"
      />
    </Svg>
  )
})
export { BusdLogo }
