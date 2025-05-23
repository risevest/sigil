import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.715 13.6096L18.305 11.2496L19.065 14.2896H20.545L22.045 8.28961H20.545L19.805 11.2896L19.065 8.28961H17.545L16.805 11.2896L16.065 8.28961H14.565L15.285 11.1896L17.715 13.6096Z" />
      <Path d="M1.95502 3.50961L6.73502 8.28961H3.56502V14.2896H5.06502V12.2896H6.16502L7.06502 14.2896H8.56502L7.66502 12.1896C8.16502 11.8896 8.56502 11.3896 8.56502 10.7896V10.1196L9.99502 11.5496L9.31502 14.2896H10.815L11.195 12.7896H11.235L20.345 21.8996L21.755 20.4896L3.37502 2.09961L1.95502 3.50961ZM7.06502 10.7896H5.06502V9.78961H7.06502V10.7896Z" />
    </Svg>
  )
}

Icon.displayName = 'RawOff'

/**
 * Material Icon: Raw Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:raw_off Material Icon Docs}
 */
export const RawOff = memo(Icon)
