import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_6414)">
        <Path d="M20.9301 3.33969V15.3397H19.5901L21.5001 17.2497C22.3201 16.9997 22.9301 16.2397 22.9301 15.3397V3.33969C22.9301 2.23969 22.0301 1.33969 20.9301 1.33969H5.59005L7.59005 3.33969H20.9301ZM6.93005 11.3397H8.93005V13.3397H6.93005V11.3397ZM18.9301 8.33969H12.5901L14.5901 10.3397H18.9301V8.33969ZM18.9301 5.33969H10.9301V6.67969L11.5901 7.33969H18.9301V5.33969ZM2.34005 0.929688L0.930054 2.33969L2.94005 4.34969L2.93005 21.3397L6.93005 17.3397H15.9301L21.6601 23.0697L23.0701 21.6597L2.34005 0.929688ZM6.10005 15.3397L4.93005 16.5097V6.33969L6.93005 8.33969V10.3397H8.93005L13.9301 15.3397H6.10005Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_6414">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SpeakerNotesOff'

/**
 * Material Icon: Speaker Notes Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:speaker_notes_off Material Icon Docs}
 */
export const SpeakerNotesOff = memo(Icon)
