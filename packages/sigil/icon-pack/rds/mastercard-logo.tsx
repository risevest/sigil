import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 32 24" width={size} height={size} {...props}>
      <Path fill="#F26122" d="M12.146 3.599h9.4v15.636h-9.4z" />
      <Path
        fill="#EA1D25"
        d="M12.448 11.417c-.016-3.044 1.342-5.926 3.683-7.818C12.126.392 6.373.858 2.917 4.669s-3.457 9.686 0 13.496 9.209 4.276 13.214 1.07c-2.341-1.893-3.699-4.775-3.683-7.818"
      />
      <Path
        fill="#F69E1E"
        d="M31.93 11.417c-.003 3.805-2.138 7.275-5.499 8.939a9.63 9.63 0 0 1-10.3-1.121c4.235-3.396 4.968-9.642 1.639-13.958a9.7 9.7 0 0 0-1.64-1.678 9.63 9.63 0 0 1 10.301-1.121c3.361 1.663 5.496 5.133 5.498 8.939"
      />
    </Svg>
  )
})
Icon.displayName = 'MastercardLogo'
export const MastercardLogo = Icon
