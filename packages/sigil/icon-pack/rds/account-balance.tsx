import { memo } from 'react'
import Svg, { Mask, Path, G } from 'react-native-svg'
import type { IconProps } from '../../types'
const AccountBalance = /* @__PURE__ */ memo(function AccountBalance(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 25 24" width={size} height={size} {...props}>
      <Mask
        id="a"
        width={25}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <Path d="M.891 0h24v24h-24z" />
      </Mask>
      <G mask="url(#a)">
        <Path d="M5.89 17v-7h2v7zm6 0v-7h2v7zm-9 4v-2h20v2zm15-4v-7h2v7zm-15-9V6l10-5 10 5v2z" />
      </G>
    </Svg>
  )
})
export { AccountBalance }
