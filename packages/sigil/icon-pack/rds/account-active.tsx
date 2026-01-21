import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AccountActive = /* @__PURE__ */ memo(function AccountActive(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 28 28" width={size} height={size} {...props}>
      <Path d="M13.75 13.5c2.28 0 4.13-1.903 4.13-4.25S16.03 5 13.75 5 9.62 6.903 9.62 9.25s1.85 4.25 4.13 4.25M13.75 15.21C9.48 15.21 6 18.69 6 22.96v.97h15.49v-.97c0-4.27-3.48-7.75-7.75-7.75z" />
    </Svg>
  )
})
export { AccountActive }
