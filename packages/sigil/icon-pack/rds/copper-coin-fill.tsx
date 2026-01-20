import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CopperCoinFill = /* @__PURE__ */ memo(function CopperCoinFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 25 24" width={size} height={size} {...props}>
      <Path
        fill={color}
        d="M12.895 22.002c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.478 10-10 10m0-14.243-4.243 4.243 4.243 4.243 4.242-4.243z"
      />
    </Svg>
  )
})
export { CopperCoinFill }
