import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M7 7.57488L8.43 9.00488C9.34 8.09488 10.61 7.52488 12 7.52488C13.39 7.52488 14.66 8.09488 15.57 9.00488L17 7.57488C15.72 6.29488 13.95 5.50488 12 5.50488C10.05 5.50488 8.28 6.29488 7 7.57488ZM12 1.50488C8.98 1.50488 6.24 2.73488 4.25 4.71488L5.66 6.12488C7.28 4.50488 9.53 3.50488 12 3.50488C14.47 3.50488 16.72 4.50488 18.34 6.12488L19.75 4.71488C17.76 2.73488 15.02 1.50488 12 1.50488ZM14.86 10.5149L9.14 10.5049C8.51 10.5049 8 11.0149 8 11.6449V21.3549C8 21.9849 8.51 22.4949 9.14 22.4949H14.85C15.48 22.4949 15.99 21.9849 15.99 21.3549V11.6449C16 11.0149 15.49 10.5149 14.86 10.5149ZM15 20.5049H9V12.5049H15V20.5049Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'SpeakerPhone'

/**
 * Material Icon: Speaker Phone
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:speaker_phone Material Icon Docs}
 */
export const SpeakerPhone = memo(Icon)
