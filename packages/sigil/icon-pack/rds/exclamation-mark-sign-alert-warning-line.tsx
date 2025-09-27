import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path d="M12.929 15.815h-2.05L10.72 2.993h2.38zm-2.295 3.902q0-.552.338-.926.336-.375 1-.375.662 0 1.006.375t.343.926-.343.914q-.345.362-1.006.362-.663 0-1-.362-.338-.362-.338-.914" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'ExclamationMarkSignAlertWarningLine'
export const ExclamationMarkSignAlertWarningLine = Icon
