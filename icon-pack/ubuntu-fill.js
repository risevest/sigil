import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.001 12C22.001 17.5224 17.524 22 12.001 22C6.47798 22 2.00098 17.5224 2.00098 12C2.00098 6.4771 6.47833 2 12.001 2C17.524 2 22.001 6.4771 22.001 12ZM5.20128 10.6642C4.46363 10.6642 3.86613 11.2623 3.86613 12C3.86613 12.7372 4.46363 13.3349 5.20128 13.3349C5.93848 13.3349 6.53628 12.7372 6.53628 12C6.53628 11.2622 5.93848 10.6642 5.20128 10.6642ZM14.7337 16.7325C14.0954 17.1015 13.8763 17.9175 14.2454 18.5558C14.6137 19.1942 15.4296 19.4137 16.0682 19.0448C16.7067 18.6759 16.9257 17.8595 16.5571 17.2208C16.1884 16.5832 15.3721 16.3644 14.7337 16.7325V16.7325ZM8.10133 12C8.10133 10.6808 8.75663 9.5152 9.75958 8.80915L8.78348 7.174C7.61518 7.955 6.74598 9.1485 6.38498 10.545C6.80648 10.8895 7.07613 11.4131 7.07613 12C7.07613 12.586 6.80643 13.1097 6.38493 13.4543C6.74583 14.8516 7.61503 16.0448 8.78343 16.826L9.75953 15.1903C8.75653 14.4848 8.10128 13.32 8.10128 12L8.10133 12ZM12.001 8.09975C14.0385 8.09975 15.7098 9.66175 15.8853 11.654L17.788 11.6261C17.6942 10.1551 17.0518 8.83495 16.0645 7.86435C15.5568 8.05565 14.9705 8.02685 14.4637 7.7342C13.9559 7.4412 13.6376 6.9472 13.5506 6.4104C13.0571 6.27455 12.538 6.2005 12.001 6.2005C11.0782 6.2005 10.2053 6.41685 9.43058 6.80035L10.3582 8.46275C10.8577 8.23045 11.4141 8.09975 12.001 8.09975ZM12.001 15.8995C11.4141 15.8995 10.8576 15.7691 10.3585 15.537L9.43063 17.1991C10.2055 17.5831 11.0782 17.8004 12.001 17.8004C12.538 17.8004 13.0575 17.7255 13.5506 17.5888C13.6376 17.0526 13.9561 16.5586 14.4638 16.2652C14.971 15.9726 15.5569 15.9435 16.0646 16.1349C17.0519 15.1642 17.6942 13.8441 17.7881 12.3732L15.8846 12.3456C15.7099 14.338 14.0386 15.8996 12.0011 15.8996L12.001 15.8995ZM14.7334 7.26675C15.372 7.6349 16.1883 7.4169 16.5566 6.77845C16.9257 6.1396 16.7071 5.32395 16.0683 4.95505C15.4296 4.58605 14.6138 4.8048 14.2447 5.44345C13.8763 6.08195 14.0954 6.89795 14.7334 7.2667V7.26675Z" />
    </Svg>
  )
}

Icon.displayName = 'UbuntuFill'

/**
 * Remix Icon: Ubuntu Fill
 * @see {@link https://remixicon.com/icon/ubuntu-fill Remix Icon Docs}
 */
export const UbuntuFill = memo(Icon)
