import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5 3.5C16.91 3.5 20.5 7.09 20.5 11.5C20.5 15.91 16.91 19.5 12.5 19.5C11.32 19.5 10.16 19.24 9.07 18.72C8.8 18.59 8.51 18.53 8.21 18.53C8.02 18.53 7.83 18.56 7.65 18.61L4.45 19.55L5.39 16.35C5.53 15.88 5.49 15.37 5.28 14.93C4.76 13.84 4.5 12.68 4.5 11.5C4.5 7.09 8.09 3.5 12.5 3.5ZM12.5 1.5C6.98 1.5 2.5 5.98 2.5 11.5C2.5 13.04 2.86 14.48 3.47 15.79L1.5 22.5L8.21 20.53C9.52 21.14 10.96 21.5 12.5 21.5C18.02 21.5 22.5 17.02 22.5 11.5C22.5 5.98 18.02 1.5 12.5 1.5Z" />
      <Path
        d="M13.5 7.5H11.5V10.5H8.5V12.5H11.5V15.5H13.5V12.5H16.5V10.5H13.5V7.5Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  )
}

Icon.displayName = 'MapsUgc'

/**
 * Material Icon: Maps Ugc
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:maps_ugc Material Icon Docs}
 */
export const MapsUgc = memo(Icon)
