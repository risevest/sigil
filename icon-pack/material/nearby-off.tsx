import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.7138 13.1171L19.1338 15.6971L17.3238 13.8871L19.5038 11.6971L12.3038 4.49715L10.1138 6.68715L8.30376 4.86715L10.8838 2.28715C11.6638 1.50715 12.9338 1.50715 13.7138 2.28715L21.7138 10.2871C22.5038 11.0671 22.5038 12.3271 21.7138 13.1171ZM21.4938 20.8871L20.0838 22.2971L16.3038 18.5271L13.7238 21.1071C12.9438 21.8871 11.6738 21.8871 10.8938 21.1071L2.89376 13.1071C2.11376 12.3271 2.11376 11.0571 2.89376 10.2771L5.47376 7.69715L1.69376 3.91715L3.10376 2.50715L21.4938 20.8871ZM14.4938 16.7171L13.1038 15.3271L12.3038 16.1271L7.88376 11.6971L8.68376 10.8971L7.28376 9.50715L5.10376 11.6971L12.3038 18.8972L14.4938 16.7171ZM16.7238 11.6971L12.3038 7.27715L11.5038 8.07715L15.9238 12.4971L16.7238 11.6971Z" />
    </Svg>
  )
}

Icon.displayName = 'NearbyOff'

/**
 * Material Icon: Nearby Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nearby_off Material Icon Docs}
 */
export const NearbyOff = memo(Icon)
