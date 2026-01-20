import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const WalletActive = /* @__PURE__ */ memo(function WalletActive(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 28 28" width={size} height={size} {...props}>
      <Path d="M22.93 9H7.82V7.5H20.5V4H4.75C3.79 4 3 4.78 3 5.75V23.5h21.5V10.73c0-.91-.68-1.65-1.57-1.73m-3.24 8.77c-.51.52-1.2.81-1.94.81s-1.43-.29-1.95-.82c-.51-.5-.8-1.19-.8-1.93s.29-1.44.82-1.95c.5-.51 1.19-.8 1.93-.8 1.52 0 2.75 1.23 2.75 2.75 0 .74-.29 1.43-.81 1.94" />
    </Svg>
  )
})
export { WalletActive }
