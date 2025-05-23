import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M16 3H17V8H16V3ZM15 5H13V4H15V3H12V6H14V7H12V8H15V5ZM18 3V8H19V6H21V3H18ZM20 5H19V4H20V5ZM20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.42 15.17L13.22 17.37C10.39 15.93 8.07 13.62 6.63 10.78L8.83 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.99 7.59L5.79 8.8C5.38 7.59 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.41 18.62 15.2 18.22L16.4 17.02C17.25 17.26 18.11 17.41 18.99 17.47V18.97H19Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'DialerSip'

/**
 * Material Icon: Dialer Sip
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dialer_sip Material Icon Docs}
 */
export const DialerSip = memo(Icon)
