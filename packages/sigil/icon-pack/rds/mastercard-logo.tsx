import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 32 24" fill="none" height={size} width={size} {...otherProps}>
      <Rect x="12.1465" y="3.59912" width="9.39984" height="15.6359" fill="#F26122" />
      <Path
        d="M12.448 11.4167C12.4325 8.37347 13.79 5.49144 16.1306 3.59877C12.126 0.392182 6.37349 0.857814 2.91676 4.66835C-0.539963 8.47889 -0.539963 14.3546 2.91676 18.1651C6.37349 21.9756 12.126 22.4413 16.1306 19.2347C13.79 17.342 12.4325 14.46 12.448 11.4167Z"
        fill="#EA1D25"
      />
      <Path
        d="M31.9292 11.4166C31.9268 15.2218 29.7923 18.6922 26.431 20.3555C23.0697 22.0189 19.0709 21.5837 16.1309 19.2346C20.3659 15.8392 21.0993 9.59268 17.7696 5.27659C17.2923 4.6516 16.742 4.08813 16.1309 3.59864C19.0709 1.2495 23.0697 0.814306 26.431 2.47766C29.7923 4.14102 31.9268 7.61135 31.9292 11.4166V11.4166Z"
        fill="#F69E1E"
      />
    </Svg>
  )
}

Icon.displayName = 'MastercardLogo'

export const MastercardLogo = memo(Icon)
