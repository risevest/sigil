import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 36 36" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M8.7 16.95L3 33L19.05 27.315M6 4.5H6.015M33 12H33.015M22.5 3H22.515M33 30H33.015M33 3L29.64 4.125C28.6836 4.44358 27.8675 5.08446 27.3312 5.93809C26.795 6.79171 26.5719 7.80509 26.7 8.805C26.85 10.095 25.845 11.25 24.525 11.25H23.955C22.665 11.25 21.555 12.15 21.315 13.41L21 15M33 19.5L31.77 19.005C30.48 18.495 29.04 19.305 28.8 20.67C28.635 21.72 27.72 22.5 26.655 22.5H25.5M16.5 3L16.995 4.23C17.505 5.52 16.695 6.96 15.33 7.2C14.28 7.35 13.5 8.28 13.5 9.345V10.5M16.5 19.5C19.395 22.395 20.745 25.755 19.5 27C18.255 28.245 14.895 26.895 12 24C9.105 21.105 7.755 17.745 9 16.5C10.245 15.255 13.605 16.605 16.5 19.5Z"
        stroke="#D2C2FB"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'PartyPopper2'

/**
 * Lucide Icon: Party Popper 2
 * @see {@link https://lucide.dev/icons/party-popper-2 Lucide Icon Docs}
 */
export const PartyPopper2 = memo(Icon)
